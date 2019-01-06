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
