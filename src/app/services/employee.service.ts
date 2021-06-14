import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../modeles/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees!: Observable<Employee[]>;
  private baseUrl = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) {
    /* this.employees=[
       {emailId
         id:1,
         firstname:"Hana",
         lastname:"Mansouri",
         emailId:"Mansouriii.hanaa@gmail.com",
         active:true
       }
     ]*/
  }

  getEmployeesList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }

deleteEmployee(id: number): Observable<any>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`, {responseType:'text'})
}
  createEmployee(employee: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }
  getEmployeeById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/delete /${id}`);
  }
}
