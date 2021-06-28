import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: "employees", component: EmployeeListComponent,  canActivate:[AuthGuard]
  },
  {
    path: "details/:id", component: EmployeeDetailsComponent,  canActivate:[AuthGuard]
  },
  {
    path: "add-employee", component: CreateEmployeeComponent,  canActivate:[AuthGuard]
  },
  {
    path: "update-employee/:id", component: UpdateEmployeeComponent,  canActivate:[AuthGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "registration", component: RegistrationComponent
  },
  { 
    path: '**', redirectTo: '/employees', pathMatch: 'full' 
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
