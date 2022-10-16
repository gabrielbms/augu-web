import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssinarFormComponent } from './assinar-form/assinar-form.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { ValidarFormComponent } from './validar-form/validar-form.component';

const routes: Routes = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
     path: 'assinar', component: AssinarFormComponent,
     canActivate: [AuthGuard],
     canLoad: [AuthGuard]
  },
  {
    path: 'validar', component: ValidarFormComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
