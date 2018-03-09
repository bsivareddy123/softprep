import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Component({
  selector: 'app-fulllength-test',
  templateUrl: './fulllength-test.component.html',
  styleUrls: ['./fulllength-test.component.css']
})
export class FulllengthTestComponent implements OnInit {
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
