import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }
  goToDetails(id: number) {
    this.router.navigate(['details', id])
  }
  deleteEmployee(id: number) {
    console.log("deleteEmployee >>>>>>>>>>>>>>>>><<")
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log("after deleting from data base")
      console.log(JSON.stringify(data));
      this.reloadData();
    }, (error) => console.error("Error >> " + error));;
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
}
