import { Component, OnInit } from '@angular/core';
//our root app component
import { NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  countDown;
  counter = 60;

  constructor(private router: Router) { 
    this.countDown = Observable.timer(.0,1000)
    .take(this.counter)
    .map(() => --this.counter);
  
}

  ngOnInit() {
    setTimeout((router: Router) => {
      this.router.navigate(['test2']);
  }, 60000);  //1min
  }
  btnClick() {
    this.router.navigateByUrl('/test2');
}
}
