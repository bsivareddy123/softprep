import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { NavbarService } from '../../services/navbar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private authService:AuthService,
    private nav:NavbarService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.nav.hide();
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are successfully logged in' + this.username, {
          cssClass: 'alert-success',
          timeout: 5000});
        this.router.navigate(['start']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
        this.router.navigate(['login']);
      }
    });
  }

  fbLogin() {
    this.userService.fbLogin().then(() => {
      console.log('User has been logged in');
      this.router.navigate(['start']);
    });  
  }
}
