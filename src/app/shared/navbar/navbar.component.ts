import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginService } from 'app/pages/services/login.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginDialogueComponent } from 'app/pages/login-dialogue/login-dialogue.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    loggedIn;
    user;

    constructor(
        public location: Location, 
        private element : ElementRef,
        private loginService: LoginService,
        private dialog: MatDialog
    ) {
        this.sidebarVisible = false;
    }

    logout(){
        this.loginService.logout();
        this.loggedIn = false;
    }

    loginDialog(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.height = '450px';
        dialogConfig.width = '600px';
        this.sidebarToggle();
        let dialogRef = this.dialog.open(LoginDialogueComponent, dialogConfig);
    }

    ngOnInit() {
        this.loginService.user.pipe().subscribe(
            data => {
              if(data != null){
                this.loggedIn = true;
                console.log("user", data);
                this.user = data
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
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isHome() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    
    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
