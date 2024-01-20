
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userData: any
  userIs: boolean = true
  constructor(private UserAuth: AuthService) { }
  ngOnInit(): void {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
      this.userIs = true
    } else {
      console.error('userData not found in localStorage');
    }
  }
  userLogOut() {
    if (this.userData) {
      this.UserAuth.logout()
    }
  }
}
