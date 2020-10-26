import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { MessagingService } from 'app/shared/messaging.service';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { LoginDialogueComponent } from '../login-dialogue/login-dialogue.component';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  startups;
  loggedIn = false;
  disable = true;

  constructor(private http: HttpClient,
    private dialog: MatDialog, 
    private loginService: LoginService,
    private messageService: MessagingService,
  ) { }

  openDialog(startup){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '600px';
    dialogConfig.width = '700px';
    dialogConfig.data = startup;
    let dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
  }

  loginDialog(){
    this.messageService.requestPermission();
  }

  ngOnInit(): void {
    this.loginService.user.pipe().subscribe(
      data => {
        if(data != null){
          this.loggedIn = true;
          // console.log("user", data);
        }
        else {
          this.loggedIn = false;
          console.log("not logged in");
        }
      },
      error => {
        console.log('not logged in')
      }
    )


    this.http.get<any>("https://api.ecell.in/misc/startup/").subscribe(
      data => {
        var arr = data;
        this.startups = arr.sort((a,b) => 
          (a.stage > b.stage ? -1 : 1)
        );
      }
    )
  }

}
