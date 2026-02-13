import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
apiUrl = 'https://localhost:7273/api/User'
constructor(public http: HttpClient) {
  this.getUser();
 }
  getUser(){
    debugger
  return this.http.get(`${this.apiUrl}/auth/user`);
  }
}
