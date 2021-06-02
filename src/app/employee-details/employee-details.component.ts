import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../modeles/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee!: Employee;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employee = new Employee(0, "", "", "", false);
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      console.log( JSON.stringify(data));
      this.employee= data;
    }, error => console.log("error =>", error));
  }
  list(){
    this.router.navigate(['employees']);
  }

}
