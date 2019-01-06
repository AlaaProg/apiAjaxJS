/*!
 * 
 * apiAjaxjs v100
 * (c) 2019 by alaa_akiel
 * For All 
 */
(function (global, factory) {
	(global.apiAjax = factory());
}(this, ( function () { 
	var xhr = null; 

	if( window.XMLHttpRequest ){ 
		var xhr = new XMLHttpRequest(); 
	}

	else if( window.ActiveXObject ){ 
		var xhr = new ActiveXObject("MicrosoftXMLHTTP"); 
	}

	function apiAjax(prm){
		
		if(prm.method){
			
			prm.method = prm.method.toUpperCase();

		}else{ prm.method = "GET"; }
		
		xhr.open( prm.method, prm.url, true);

		// ON Start request 
		xhr.addEventListener('loadstart', function(e){
			if( prm.start ){ prm.start(e) }
		});

		// On Any readyState Changed
		xhr.addEventListener('readystatechange',function(e){
			if( prm.change ) { prm.change(this) }
		});

		xhr.addEventListener('loadend', function(e){
			if( this.readyState == 4){ 
				if( this.status == 200){
					if( prm.done ){
						prm.done({
							data:JSON.parse(this.responseText),
							status:this.status
						})
					}
				}else{
					if(prm.error){
						try{prm.error(JSON.parse(this.responseText))  
						}catch(e){prm.error(this) }
					}
				}
			}
		})

		if(prm.header){
			Object.keys(prm.header).forEach(function(key){
				xhr.setRequestHeader(key,prm.header[key]);
			});
		}

		xhr.setRequestHeader("Content-Type","application/json")
		
		xhr.send(JSON.stringify(prm.data));
	}


	apiAjax.get = (url,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'GET',
				url:url,
				header:header,
				done:_200,
				error:_401
			})
		})
	}


	apiAjax.view = (url,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'VIEW',
				url:url,
				header:header,
				done:_200,
				error:_401
			})
		})
	}


	apiAjax.post = (url,data,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'POST',
				url:url,
				header:header,
				data:data,
				done:_200,
				error:_401
			})
		})
	}

	apiAjax.delete = (url,data={},header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'DELETE',
				url:url,
				header:header,
				data:data,
				done:_200,
				error:_401
			})
		})
	}

	apiAjax.put = (url,data,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'PUT',
				url:url,
				header:header,
				data:data,
				done:_200,
				error:_401
			})
		})
	}

	return apiAjax

})))
