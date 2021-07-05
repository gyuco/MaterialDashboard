import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth-routes.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../Material-module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
