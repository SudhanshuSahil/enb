import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-notif',
  templateUrl: './dialog-add-notif.component.html',
  styleUrls: ['./dialog-add-notif.component.css']
})
export class DialogAddNotifComponent implements OnInit {
  files;
  focus;
  focus1;
  company_name;
  url;
  message;
  name;
  email;
  phno;

  constructor(private http: HttpClient) {
    this.files = [];
   }

  onFileChanged(event: any) {
    this.files = event.target.files;
  }
  

  submit(){
    console.log('sending request')

    var body = new FormData();

    body.append('name', this.company_name);
    if (this.url){
      body.append('website_url', this.url);
    }
    else {
      body.append('website_url', 'https://ecell.in');
    }
    body.append('description', this.message);
    body.append('poc_name', this.name);
    body.append('poc_email', this.email);
    body.append('poc_number', this.phno);

    if (this.files[0]){
      body.append('images', this.files[0]);
    }

    this.http.post("https://api.ecell.in/misc/startup-post/", body).subscribe(
      data => {
        alert("your post has been submitted for review")
        window.location.reload()
      },
      error => {
        alert("Post not accepted. Please enter all compulsory fields")
      }
    )

  }

  ngOnInit(): void {
  }

}
