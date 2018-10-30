import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employees/create-employee/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ResetPasswordComponent } from './Login/resetpassword.component';
import { ConfirmPasswordValidator } from './shared/confirm-equql-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';


const appRoutes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: '', redirectTo: "/list", pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ResetPasswordComponent,
    ConfirmPasswordValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
