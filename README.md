# apiAjaxJS

### Simple library APIAjax request Json & respons json 

```
<script type="text/javascript" src="apiAjax.js"></script>
<script type="text/javascript">
    // How To User  
    apiAjax({
      method: String , // methods request ( GET | POST | PUT | . . . . .  )
      url   : String , // path api 
      header: Object , // header 
      data  : Object , // data JSON
      
      done  : function , 
      error : function , 
      start : function ,
      change: function , 
    })
    
</script>
```

___done function call if status ==  200___
```
 done : (response)=>{
    // response = Object { data , status } 
 }
```
___error function call if status != 200___
```
  error:(response)=>{
     // response = JSON or xhrResponse 
  }
```
### OR use (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)[Promise]
___Promises are a clean way to implement async programming in JavaScript (ES6 new feature).
 Prior to promises, Callbacks were used to implement async programming.___

```
<script type="text/javascript" src="apiAjax.js"></script>
<script type="text/javascript">
   apiAjax.get(url).then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });
   apiAjax.post (url).then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });
</script>
```

