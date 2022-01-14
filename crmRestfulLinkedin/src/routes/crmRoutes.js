import {addNewContact,getContacts,getContactById,updateContact,deleteContact} from '../controllers/crmController'
import {login,register,loginRequired} from '../controllers/userController'
var mongoose = require('mongoose');
const routes = (app)=>{
    app.route("/contact")
        // .get((req,res,next)=>{
        //     //middleware
        //     console.log(`Resquest ${req.originalUrl}`)
        //     next()
        // },getContacts
        // )
        .get(loginRequired,getContacts)
        .post(loginRequired,addNewContact)
    app.route("/contact/:contactID")
        .get(loginRequired,getContactById)
        .put(loginRequired,updateContact)
        .delete(loginRequired,deleteContact)
    //register user route
    app.route('/auth/register')
        .post(register)

    //login route.
    app.route('/auth/login')
        .post(login)


}
export default routes;