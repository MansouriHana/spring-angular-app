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

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
