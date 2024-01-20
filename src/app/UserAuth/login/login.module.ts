
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'; 
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, LoginRoutingModule],
  
})
export class LoginModule { }
