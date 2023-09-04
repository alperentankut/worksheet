const accessControl = (req,res,next) =>{
    const access = true;
    if(!access){
        res.status(401).json({
            success : false,
            message : "You are not authorized"
        })
    }
    
    next()
};

module.exports = {
    accessControl
}
//status(401) unauthorized kodunu temsil ediyor. Biz bu status() ile
//istediğimiz statusu gönderebiliriz.