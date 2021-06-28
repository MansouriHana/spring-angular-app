import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../modeles/employee';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username!: string;
  private password!: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.login(this.username, this.password).subscribe((resp) => {
      console.log("Login is done");
      this.router.navigate(['employees']);
    }, (err) => {
      console.log("Error ==>>> : ", err);
    })
  }

}
