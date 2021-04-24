import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GuardAuthService } from './guard-auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contactus', canActivate: [GuardAuthService], component: ContactUsComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
