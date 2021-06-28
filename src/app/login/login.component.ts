import { Component, OnInit } from '@angular/core';
import { Employee } from '../modeles/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   employee!: Employee;
  constructor() { }
   
  ngOnInit(): void {
  }
  login(){
    
  }

}
