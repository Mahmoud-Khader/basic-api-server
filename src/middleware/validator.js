'use strict'

module.exports=(req,res,next)=>{
    req.name=req.query.name
    let name=req.name
    if(typeof name === 'string' && name.length !==0){
        next();
    } else{
        next('its not a name :(')
    }
}