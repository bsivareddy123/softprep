import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../../../services/exam.service';
import { HelperService } from '../../../../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../../../../models/index';
import { Observable, Subscription } from 'rxjs/Rx';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';


@Component({
  selector: 'app-quantitative',
  templateUrl: './quantitative.component.html',
  styleUrls: ['./quantitative.component.css'],
  providers: [ExamService],
})
export class QuantitativeComponent implements OnInit {
  username: String ="sivareddy";
  password: String;
  email: string = "bethasivareddy@gmail.com";
  ticks = 0;
    
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;

    sub: Subscription;

  show = false;
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode: string = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': true,
    'shuffleQuestions': true,
    'shuffleOptions': true,
    'showClock': true,
    'showPager': false,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: ExamService,private router: Router) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);

    this.startTimer();
  }
  

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(index) {
    return this.quiz.questions[index].options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'QuizId': this.quiz.id, 'QuestionId': x.id, 'Answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';
  }
  private startTimer() {

    let timer = Observable.timer(1, 1000);
    this.sub = timer.subscribe(
        t => {
            this.ticks = t;
            
            this.secondsDisplay = this.getSeconds(this.ticks);
            this.minutesDisplay = this.getMinutes(this.ticks);
            this.hoursDisplay = this.getHours(this.ticks);
        }
    );
}

private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
}

private getMinutes(ticks: number) {
     return this.pad((Math.floor(ticks / 60)) % 60);
}

private getHours(ticks: number) {
    return this.pad(Math.floor((ticks / 60) / 60));
}

private pad(digit: any) { 
    return digit <= 9 ? '0' + digit : digit;
}
}
