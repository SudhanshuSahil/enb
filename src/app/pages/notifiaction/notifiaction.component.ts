import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogAddNotifComponent } from '../dialog-add-notif/dialog-add-notif.component';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-notifiaction',
  templateUrl: './notifiaction.component.html',
  styleUrls: ['./notifiaction.component.css']
})
export class NotifiactionComponent implements OnInit {

  posts;

  constructor(private http: HttpClient, private dialog: MatDialog, ) { }

  openDialog(post){
    let startup = {}
    startup['pocName'] = post.poc_name
    startup['pocEmail'] = post.poc_email
    startup['pocPhone'] = post.poc_number
    startup['name'] = post.name
    startup['description'] = post.description

    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '450px';
    dialogConfig.width = '600px';
    dialogConfig.data = startup;

    let dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
    
  }

  newDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '650px';
    dialogConfig.width = '700px';
    let dialogRef = this.dialog.open(DialogAddNotifComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.http.get("https://api.ecell.in/misc/startup-post/").subscribe(
      data => {
        this.posts = data
        this.posts.reverse()
      }
    )
  }

}
