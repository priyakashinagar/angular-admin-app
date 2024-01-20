// src/app/modules/register/register.component.ts
import { Component } from '@angular/core';
// import { AuthenticationService } from '../auth.service';
import { AuthService } from '../../auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  registrationError: boolean = false;
  name: any;
  mobile: any;
  userData: any

  constructor(private authService: AuthService, private router: Router) { }
  userRegistration() {
    if (this.username != '' && this.password != '' && this.name != '' && this.mobile != '') {
      this.userData = {
        "username": this.username,
        "password": this.password,
        "name": this.name,
        "mobile": this.mobile
      }
      localStorage.setItem('userData', JSON.stringify(this.userData));
      alert("User Registration SuccessFully");
      this.router.navigate(['/login'])

      
    }
    else {
      alert("invalid UserName & PassWord");
    }
  }

  register(): void {
    this.registrationError = false; // Reset registration error

    // Check if both username and password are provided
    if (this.username && this.password) {
      if (this.authService.login(this.username, this.password)) {
        // Navigate to the login page or perform any other action on successful registration
        console.log('Registration successful');
        // You can use Angular Router to navigate to another component or URL
        // For example, import Router from '@angular/router' and use this.router.navigate(['/login']);
      } else {
        // Handle failed registration
        console.log('Registration failed');
        this.registrationError = true; // Set registration error flag
      }
    } else {
      // Handle case where either username or password is not provided
      console.log('Please provide both username and password');
      this.registrationError = true; // Set registration error flag
    }
  }
}
