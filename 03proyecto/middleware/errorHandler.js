const { constants } = require('../constants')

const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
  
    if(statusCode == constants.VALIDATION_ERROR){
        console.log(statusCode)
    }
 
    switch(statusCode){
        case constants.NOT_FOUND:
            res.json({
                title:"Not Found", 
                message: err.message, 
                stackTrace:err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title:"Unauthorized",
                message: err.message, 
                stackTrace:err.stack
            });          
            break;

        case constants.FORBIDDEN:
            res.json({
                title:"Forbidden",
                message: err.message, 
                stackTrace:err.stack
            });          
            break;


        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Error",
                message: err.message, 
                stackTrace:err.stack
            });          
            break;    

        case constants.SERVER_ERROR:
            res.json({
                title:"Sever Error", 
                message: err.message, 
                stackTrace:err.stack
            });
            break;
 
        default:
            console.log('No Error, All good!')
            break;
          
    }   
    next();    
  
};
module.exports =  errorHandler;