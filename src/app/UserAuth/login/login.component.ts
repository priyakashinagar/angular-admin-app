
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  userData:any
  constructor(private authService: AuthService, private router: Router) { }

  UserLogIn() {
    if (this.username != '' && this.password != '') {
      const userDataString = localStorage.getItem('userData');
      if (userDataString) {
        this.userData = JSON.parse(userDataString);
        console.log(this.userData);
        if (this.username === this.userData.username && this.password === this.userData.password) {
          alert("User LogIn SuccessFully")
          this.router.navigate(['/dashboard']);

        }
        else {
          alert("invalid UserName & PassWord");
        }
      } else {
        console.error('userData not found in localStorage');
        // Handle the case where 'userData' is not present in localStorage
      }
    }
    else {
      alert("invalid UserName & PassWord");
    }
  }

  login(): void {
    this.loginError = false; // Reset login error

    // Check if both username and password are provided
    if (this.username && this.password) {
      if (this.authService.login(this.username, this.password)) {
        // Navigate to the dashboard or perform any other action on successful login
        console.log('Login successful');
        // You can use Angular Router to navigate to another component or URL
        // For example, import Router from '@angular/router' and use this.router.navigate(['/dashboard']);
      } else {
        // Handle failed login
        console.log('Login failed');
        this.loginError = true; // Set login error flag
      }
    } else {
      // Handle case where either username or password is not provided
      console.log('Please provide both username and password');
      this.loginError = true; // Set login error flag
    }
  }
}
