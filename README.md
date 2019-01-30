# apiAjaxJS

### Simple library API Ajax to request Json And  response Json   

# Install 
   ```
     <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/AlaaProg/apiAjaxJS/apiAjax.js"></script>
   ```
   
# Usage
a `GET` request
```
   // apiAjax.get(url,process,header)
   apiAjax.get('users/1').then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });
   
   //  (e.loaded / e.total) * 100 to  0% to 100% 
   apiAjax.get('users/1',e=>{  processbar  = (e.loaded / e.total) * 100 }).then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });
   
```
a `POST` request
```
    // apiAjax.post(url,data,progress,header)
    apiAjax.post('users',data={'username':'alaa_akiel'}).then((resp)=>{
        // done 
   }).catch((resp)=>{ 
       // Error  
   });

```
and can upload files with it 
```
 apiAjax.upload(url, FormData, process, header)
    .then(resp=>{
        // done 
    }).catch(resp=>{ 
        // Error
    })
```

# Functions 

##### apiAjax.get(url,process,header)
##### apiAjax.view(url,process,header)
##### apiAjax.post(url,data,process,header)
##### apiAjax.delete(url,data={},process,header)
##### apiAjax.put(url,data,process,header)
##### apiAjax.upload(url,data,process,header)


# Promises
 apiAjax depends on a ES6 Promise . If your environment doesn't support ES6 Promises, you can
 Requests can be made by passing the relevant config to `apiAjax` 
 
 ```js 
  // this without Promise
  apiAjax({
     method  : '' , 
     data    : '' , 
     done    : function(resp) , 
     error   : function(resp) , 
     start   : function()     , // start load 
     process : function(eventUploadProcess),
     header  : {} , 
     uploadfiles : true || false 
  });
 ```

# Exmpale
 [exmpale upload files with VueJs & Flask](https://github.com/AlaaProg/Flask-Vue-xhr/blob/master/admins/static/js/components/upload.js#L75)
