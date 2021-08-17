  
'use strict';

module.exports=(req,res,next)=>{
    console.log('Requset LOOGGER' , req.method,req.path)
    next();

}