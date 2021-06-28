import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { LoginStoreService } from './login-store.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient, private loginStore: LoginStoreService) { }

  login(username: string, password: string): Observable<any> {
    return this.httpclient.post('/user/login', {
       username: username, password: password 
      }).pipe(map((resp: any) => {
      this.loginStore.token = resp.token;
      return resp;
    }));

  }
}
