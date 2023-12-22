import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
 
  {
    path: 'profile',
    component: AdminProfileComponent,
  },

];


@NgModule({
  declarations: [AdminProfileComponent],
  imports: [RouterModule.forChild (route),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AdminManagementModule { }
