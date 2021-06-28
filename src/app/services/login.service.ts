import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { LoginStoreService } from './login-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = "http://localhost:8080/user";
  constructor(private httpclient: HttpClient, private loginStore: LoginStoreService) { }

  login(username: string, password: string): Observable<any> {
    return this.httpclient.post(`${this.baseUrl}/login`, {
       username: username, password: password 
      }).pipe(
        map((resp: any) => {
          console.log("resp.token>>>>>>>>>> ",resp.token);
      this.loginStore.token = resp.token;
      return resp;
    }));

  }

  register(username: string, password: string): Observable<any> {
    return this.httpclient.post('/user/register', {
      username: username,
      password: password
    });
  }
}
