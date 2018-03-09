import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../../../services/auth.service';
import {tokenNotExpired} from 'angular2-jwt';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { NavbarService } from '../../../services/navbar.service';
import * as _ from 'underscore';
import { PagerService } from '../../../services/lessonDetails/pager.service';

@Component({
  moduleId: module.id,
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.css']
})
export class AlgebraComponent implements OnInit {
  username: String ="sivareddy";
  password: String;
  email: string = "bethasivareddy@gmail.com";
  authToken: any;
  user: any;
  isDev:boolean;
constructor(private http: Http, private pagerService: PagerService,
  private authService:AuthService,
  private nav:NavbarService,
  private router:Router,
  private flashMessage:FlashMessagesService) {
  this.isDev = true;  
}
// array of all items to be paged
private allItems: any[];

// pager object
pager: any = {};

// paged items
pagedItems: any[];

ngOnInit() {
   // get algebra data
   this.http.get('../data/algebra.json')
       .map((response: Response) => response.json())
       .subscribe(data => {
           // set items to json response
           this.allItems = data;

           // initialize to page 1
           this.setPage(1);
       });
}

logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
  alert("logging out..");
 
}

setPage(page: number) {
   if (page < 1 || page > this.pager.totalPages) {
       return;
   }

   // get pager object from service
   this.pager = this.pagerService.getPager(this.allItems.length, page);

   // get current page of items
   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}