import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  private employees: Employee[];
  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employees = this.employeeService.getEmployee();
  }

}
