import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "user-create",
    component : CreateUserComponent
  },
  {
    path : "edit-user/:id",
    component : EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
