import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



const route: Routes = [
 
  {
    path: '',
    component: LoginPageComponent,
  },

];


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    RouterModule.forChild (route),
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class LoginModule {}
