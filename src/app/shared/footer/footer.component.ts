import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    message;
    name;
    email;

    constructor(private http: HttpClient) { }

    sendFeedback(){
        console.log('feedback');
        // console.log(this.email, this.name, this.message)

        var body = new FormData();

        body.append('name', this.name)
        body.append('email', this.email)
        body.append('message', this.message)
        body.append('from_url', "https://ecell.in/enb-list-thing")
        

        this.http.post("https://api.ecell.in/misc/feedback/", body).subscribe(
            data => {
                alert("Feedback Recieved")
            }
        )


    }

    ngOnInit() {}
}
