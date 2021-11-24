const getHome = (req,res)=>{
    res.render("home");
}
const getAbout = (req,res)=>{
    res.render("about");
}
const getSignup = (req,res)=>{
    res.render("signup");
}
const getLogin = (req,res)=>{
    res.render("login");
}
const getSubjects = (req,res)=>{
    res.render("subjects");
}

module.exports = {
    getAbout,
    getHome,
    getLogin,
    getSignup,
    getSubjects
}