import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../../services/navbar.service';
import {AuthService} from '../../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
 lessonname:string;
 lessonCategoryname:string;
 question1:string;
 answer1:string;
 question2:string;
 answer2:string;
 question3:string;
 answer3:string;
 question4:string;
 answer4:string;
 question5:string;
 answer5:string;
 
  constructor(private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private nav:NavbarService,
    private router: Router) { }

  ngOnInit() {
    this.nav.show();
  }
  onLessonSubmit(){
    
    const lesson={
      lessonname:this.lessonname,
      lessonCategoryname:this.lessonCategoryname,
      question1:this.question1,
      answer1:this.answer1,
      question2:this.question2,
      answer2:this.answer2,
      question3:this.question3,
      answer3:this.answer3,
      question4:this.question4,
      answer4:this.answer4,
      question5:this.question5,
      answer5:this.answer5,
    }
    console.log(lesson);
    this.authService.saveLesson(lesson).subscribe(data => {
      if(data.success){
        this.flashMessage.show('new lesson added', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['admindashboard']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        // this.router.navigate(['/admin']);
      }
    });
  }
}
