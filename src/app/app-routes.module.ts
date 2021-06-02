import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const appRoutes: Routes = [
  { 
    path: '', redirectTo: '/employees', pathMatch: 'full' 
  },
  {
    path: "employees", component: EmployeeListComponent
  },
  {
    path: "details/:id", component: EmployeeDetailsComponent
  },
  {
    path: "add-employee", component: CreateEmployeeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
