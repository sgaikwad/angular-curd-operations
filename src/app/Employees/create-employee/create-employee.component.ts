import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  };
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    {
      id: 1,
      name: "Help Desk"
    },
    {
      id: 2,
      name: "HR"
    },
    {
      id: 3,
      name: "IT"
    },
    {
      id: 4,
      name: "Payroll"
    }

  ];
  constructor() {
    this.datePickerConfig = Object.assign({}, { containerClass: 'theme-dark-blue', dateInputFormat: 'YYYY-MM-DD', showWeekNumbers: false });
  }

  ngOnInit() {
  }

  saveEmployee(employee: Employee): void {
    console.log(employee);
  }

  togglePreview(): void {
    this.previewPhoto = !this.previewPhoto;
  }
}
