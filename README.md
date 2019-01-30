# apiAjaxJS

### Simple library APIAjax request Json & respons json 

### OR use [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
___Promises are a clean way to implement async programming in JavaScript (ES6 new feature).
 Prior to promises, Callbacks were used to implement async programming.___

```
<script type="text/javascript" src="apiAjax.js"></script>
<script type="text/javascript">
   apiAjax.get(url,process,header).then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });
   apiAjax.post (url,data,process,header).then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });
   
</script>
```

__METHODS PUT , VIEW , DELETE , GET , POST __

__AND UPLOAD__ 
__This To Upload file__

```
apiAjax.upload(url, FormData, process, header)
    .then(resp=>{
        // 
    }).catch(resp=>{ 
        // 
    })
```
[this Exmpale with VueJs](https://github.com/AlaaProg/Flask-Vue-xhr/blob/master/admins/static/js/components/upload.js#L75)
