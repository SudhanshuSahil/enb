import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss']
})
export class InitiativesComponent implements OnInit {

  initiatives;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    if(localStorage.getItem('enb_initiatives')){
      console.log('loading from local cache')
      let temp = localStorage.getItem('enb_initiatives');
      this.initiatives = JSON.parse(temp)
    }
    
    this.http.get("https://api.ecell.in/misc/portal/").subscribe(
      data => {
        this.initiatives = data;
        localStorage.setItem('enb_initiatives', JSON.stringify(data));
      }
    )
    
  }

}
