function userAuthCheck(req, res, next){
    if(req.user.role != "admin"){
        res.status(403);
        return res.send('You are not allowed here');
    }
    next();
}

module.exports = {
    userAuthCheck
}