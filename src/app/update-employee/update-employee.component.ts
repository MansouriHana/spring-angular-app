import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../modeles/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;
  employee!:Employee
  constructor(private employeeService: EmployeeService, private activateRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.employee= new Employee(0,"","","",false);
    this.id = this.activateRouter.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
  }
  goToList(){
    this.router.navigate(['employees']);
  }
  updateEmployee(){
    this.employee= this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(data =>{
      console.log(data);
      this.employee= new Employee(0,"","","",false);
      this.goToList();
    }, error =>console.log("error >> "+error));
  }
  onSubmit(){
    this.updateEmployee();
  }

}
