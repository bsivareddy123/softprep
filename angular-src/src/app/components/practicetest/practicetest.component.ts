import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';


@Component({
  selector: 'app-practicetest',
  templateUrl: './practicetest.component.html',
  styleUrls: ['./practicetest.component.css']
})
export class PracticetestComponent implements OnInit {
  username: String ="sivareddy";
  password: String;
  email: string = "bethasivareddy@gmail.com";
  authToken: any;
  user: any;
  isDev:boolean;
  constructor(private http:Http) {
    this.isDev = true; 
   }


  ngOnInit() {

  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    alert("logging out..");
   
  }
}
