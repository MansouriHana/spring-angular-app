import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../modeles/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }
}
