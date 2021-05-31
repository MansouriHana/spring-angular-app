import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../modeles/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }
  gotoList() {
    this.router.navigate(["/employees"]);
  }
  save() {
    console.log("save >>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(JSON.stringify(this.employee))
    /*this.employeeService.createEmployee(this.employee).subscribe(data => {
      
      console.log(data);
     // this.employee = new Employee();
      //this.gotoList();
    },
      error => console.log("error => ", error)
    );*/
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
