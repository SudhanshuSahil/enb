import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  
export class MessagingService {

    currentMessage = new BehaviorSubject(null);

    constructor(private angularFireMessaging: AngularFireMessaging, private http: HttpClient) {
        this.angularFireMessaging.messages.subscribe(
        (_messaging: AngularFireMessaging) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        }
        )
    }

    requestPermission() {
        this.angularFireMessaging.requestToken.subscribe(
        (token) => {
            console.log(token);
            var body = new FormData();

            body.append("registration_id", token);
            body.append("type", "web"),
            body.append("device_id", "enb")

            this.http.post("https://api.ecell.in/misc/fcm/", body).subscribe(
                data => {
                    alert("Your device for registered for notifications")
                },
                error => {
                    console.log(error.error.registration_id[0])
                    if (error.error.registration_id[0] == "This field must be unique."){
                        alert ("device already registered")
                    }
                }
            )

        },
        (err) => {
            console.error('Unable to get permission to notify.', err);
        }
        );
    }

    receiveMessage() {
        this.angularFireMessaging.messages.subscribe(
        (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
        })
    }


}
