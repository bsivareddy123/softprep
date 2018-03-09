import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: String ="sivareddy";
  password: String;
  email: string = "bethasivareddy@gmail.com";
  authToken: any;
  user: any;
  isDev:boolean;
  constructor(public nav: NavbarService,private router:Router) {
    this.isDev = true; 
   }

  ngOnInit() {
    this.nav.show();
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    alert("logging out..");
   
  }
}