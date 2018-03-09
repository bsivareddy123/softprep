import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  username: String ="sivareddy";
  password: String;
  email: string = "bethasivareddy@gmail.com";
  authToken: any;
  isDev:boolean;
  constructor(private authService:AuthService, private router:Router, private nav:NavbarService) {
    this.isDev = true;
   }

  ngOnInit() {
    this.nav.show();
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    alert("logging out..");
   
  }
}
