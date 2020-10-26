import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { first } from 'rxjs-compat/operator/first';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-dialogue',
  templateUrl: './login-dialogue.component.html',
  styleUrls: ['./login-dialogue.component.css']
})
export class LoginDialogueComponent implements OnInit {
  username;
  password;
  focus;
  focus1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginDialogueComponent>,
    public loginService: LoginService,
  ) { }

  close(){
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.username, this.password)

    this.loginService.user.pipe().subscribe(
      data => {
        console.log(data, "ssss")
      },
      error => {
        console.log('not logged in')
      }
    )
  }

}
