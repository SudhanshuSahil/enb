import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { 
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username, password){ 

    console.log("logging in ", username)
    var body = new FormData();
    body.append('username', username);
    body.append('password', password);

    this.http.post("https://api.ecell.in/misc/check-investor/", body).subscribe(
      data => {
        console.log(data)
        var user = {}
        user['id'] = data['key']
        user['email'] = data['email']
        user['name'] = data['name']
        localStorage.setItem('user', JSON.stringify(user));
        window.location.reload();
      },
      error => {
        alert('Invalid Credentials');
      }
    )
  }

  logout(){
    localStorage.clear();
    window.location.reload();
  }
}
