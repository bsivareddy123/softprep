import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService:AuthService,
    public nav: NavbarService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.nav.hide();
  }
  onLoginClick(){
  
    this.router.navigate(['/login']);
    
  }
  onSignupClick(){
  
    this.router.navigate(['/register']);
    
  }
}
