import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppRoutesModule } from './app-routes.module';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeService } from './services/employee.service';
import { LoginService } from './services/login.service';
import { LoginStoreService } from './services/login-store.service';
//CRO-yr5n-WOXN-ejr3D
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService,
    LoginService,
    LoginStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
