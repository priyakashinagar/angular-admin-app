import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'Priya';
  constructor(private router:Router){}
  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      const authToken = 'dummy-auth-token';
      localStorage.setItem(this.STORAGE_KEY, authToken);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.clear();
    this.router.navigate(['/dashboard']);
    alert("User LogOut SuccessFully")
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY);
  }
}
