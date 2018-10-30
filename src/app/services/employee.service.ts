import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService{

    private employees:Employee[]=[
        {
          id:1,
          name:'Mark',
          gender:'Male',
          contactPreference:'Email',
          email:'mark@google.com',
          dateOfBirth:new Date('10/25/1988'),
          department:'IT',
          isActive:true,
          photoPath:'assets/images/gents.png'
        },
        {
          id:2,
          name:'Mary',
          gender:'Female',
          contactPreference:'Phone',
          phoneNumber:12344565656,
          dateOfBirth:new Date('10/25/1979'),
          department:'HR',
          isActive:true,
          photoPath:'assets/images/lady.jpg'
        }
      ]

    constructor(private client:HttpClient){

    }
    
    getEmployee():Employee[]{
        return this.employees;
    }
}