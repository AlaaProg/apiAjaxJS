/*!
 * 
 * apiAjaxjs
 */
 
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
	(global.apiAjax = factory());
}(this, ( function () { 

	function apiAjax(prm){
		var xhr = null; 

		if( window.XMLHttpRequest ){ 
			var xhr = new XMLHttpRequest(); 
		}

		else if( window.ActiveXObject ){ 
			var xhr = new ActiveXObject("MicrosoftXMLHTTP"); 
		}

		if(prm.method){
			
			prm.method = prm.method.toUpperCase();

		}else{ prm.method = "GET"; }

		xhr.overrideMimeType('text/plain; charset=x-user-defined');

	
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
						try{ prm.done({data:JSON.parse(this.responseText),status:this.status})}
						catch(e){prm.done({data:this.responseText,status:this.status})}
					}
				}else{
					if(prm.error){
						try{prm.error(JSON.parse(this.responseText))  
						}catch(e){prm.error(this) }
					}
				}
			}
		})

		xhr.upload.addEventListener("process", function(e){
			if(prm.process){
				prm.process(e)
			}
		});

		xhr.open( prm.method, prm.url, true);

		xhr.setRequestHeader("Access-Control-Allow-Origin","*")
		if(prm.header){
			Object.keys(prm.header).forEach(function(key){
				console.log(key,prm.header[key])
				xhr.setRequestHeader(key,prm.header[key]);
			});
		}

		
		if(prm.uploadfiles){ xhr.send(prm.data); }
		else{
			xhr.setRequestHeader("Content-Type","application/json")
			xhr.send(JSON.stringify(prm.data));
		}
	}


	apiAjax.get = (url,process,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'GET',
				url:url,
				process:process,
				header:header,
				done:_200,
				error:_401
			})
		})
	}



	apiAjax.view = (url,process,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'VIEW',
				url:url,
				process:process,
				header:header,
				done:_200,
				error:_401
			})
		})
	}


	apiAjax.post = (url,data,process,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'POST',
				url:url,
				header:header,
				process:process,
				data:data,
				done:_200,
				error:_401
			})
		})
	}

	apiAjax.delete = (url,data={},process,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'DELETE',
				url:url,
				header:header,
				process:process,
				data:data,
				done:_200,
				error:_401
			})
		})
	}

	apiAjax.put = (url,data,process,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'PUT',
				url:url,
				process:process,
				header:header,
				data:data,
				done:_200,
				error:_401
			})
		})
	}


	apiAjax.upload = (url,data,process,header)=>{
		return new Promise(function(_200,_401){
			apiAjax({method:'POST',
				uploadfiles:true,
				process:process,
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
