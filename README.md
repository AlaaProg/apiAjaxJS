# apiAjaxJS


```
<script type="text/javascript" src="apiAjax.js"></script>
<script type="text/javascript">
    // this stat
    apiAjax({
      method: String ,
			url   : String '
      header: Object ,
      data  : Object ,
			done:(response)=>{ 
				 //  response => object { data:object(JSON), status:integer } 
			},
			error:(response)=>{ 
          //  response => JSON ? responseText : object xhrRespons
      }, 
      start:()=>{
        // loadstart
      },
      change:(response)=>{
        // response => JSON ? responseText : object xhrResponse
        // readystatechange
      },
		})
    
</script>
```
