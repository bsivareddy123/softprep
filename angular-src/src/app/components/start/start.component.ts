import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  username: String ="sivareddy";
  password: String;
  email: string = "bethasivareddy@gmail.com";
  authToken: any;
  user: any;
  isDev:boolean;
  constructor(private http:Http, 
    private authService:AuthService,
    private nav:NavbarService,
    private router:Router,
    private flashMessage:FlashMessagesService) {
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
