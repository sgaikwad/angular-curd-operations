import { Component } from "@angular/core";
import { Password } from "../models/password.model";


@Component({
    selector:"app-login",
    templateUrl:"./resetpassword.component.html"
})

export class ResetPasswordComponent{

    password:Password = {
        confirmPassword:null,
        password:null
    }

    SavePassword(password:Password){
        console.log(password);
    }
}