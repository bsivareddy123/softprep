import { Component, OnInit } from '@angular/core';
import { Section5 } from '../../services/section5';
import { HelperService } from '../../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../../models/index';
import { Observable, Subscription } from 'rxjs/Rx';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import { Router } from '@angular/router';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css'],
  providers: [Section5],
})
export class Test5Component implements OnInit {
  ticks = 0;
  minutesDisplay: number = 0;
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
  'richText': false,
  'shuffleQuestions': true,
  'shuffleOptions': true,
  'showClock': false,
  'showPager': true,
  'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  operation:string[] = ['', '', ''];
  display:string = '';
  subDisplay:string = ''
  activeBuildingNumber:string = '';

  buildNumber(num:string): void{
    this.activeBuildingNumber += num;
    // if operator is defined, set second variable
    if(this.operation[1].length) {
      this.operation[2] = this.activeBuildingNumber;
    }
    // else set first variable
    else {
      this.operation[0] = this.activeBuildingNumber;
      this.subDisplay = '';
    }

    this.renderDisplay();
  }

  // render display
  renderDisplay(): void {
    this.display = this.operation.join(' ');
  }

  //
  selectOperator(operator:string): void {
    if(!this.operation[0].length){
      this.displayError();
      this.subDisplay = 'Enter number before operation';
      return;
    }
    this.operation[1] = operator;
    this.activeBuildingNumber = '';
    this.renderDisplay();
  }

  showResult(): void {
    if( this.confirmInputs() ) {
      let val = this.calculateResult();

      this.display = ''+val;
      this.subDisplay = this.operation.join(' ');

      this.resetOperation()
    }
  }

  resetOperation():void {
    this.operation = ['', '', ''];
    this.activeBuildingNumber = '';
  }

  displayError():void {
    this.display = 'Error!'
  }

  confirmInputs():boolean {
    if(!this.operation[0].length){
      this.displayError()
      this.subDisplay = 'Enter First Number';
      return false;
    } else if(!this.operation[1].length){
      this.displayError()
      this.subDisplay = 'Enter Operator';
      return false;
    } else if(!this.operation[1].length){
      this.displayError()
      this.subDisplay = 'Enter Second Number';
      return false;
    }
    return true;
  }

  calculateResult():number {
    switch(this.operation[1]) {
      case '*':
        return parseFloat(this.operation[0]) * parseFloat(this.operation[2]);
      case "+":
        return parseFloat(this.operation[0]) + parseFloat(this.operation[2]);
      case "-":
        return parseFloat(this.operation[0]) - parseFloat(this.operation[2]);
    }
  }



constructor(private quizService: Section5, private router: Router) { }

  ngOnInit() {
      this.quizes = this.quizService.getAll();
      this.quizName = this.quizes[0].id;
      this.loadQuiz(this.quizName);

      this.startTimer();
      history.pushState(null, null, location.href);
      window.onpopstate = function(event) {
        alert("Your, browsers back button is disabled!");
       history.go(1);
      }
     
  }
  private startTimer() {

    let timer = Observable.timer(1, 1000);
    this.sub = timer.subscribe(
        t => {
            this.ticks = t;
            this.secondsDisplay = this.getSeconds(this.ticks);
            this.minutesDisplay = this.getMinutes(this.ticks);
        }
    );
}

private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
}

private getMinutes(ticks: number) {
     return this.pad((Math.floor(ticks / 60)) % 60);
}

private pad(digit: any) { 
    return digit <= 9 ? '0' + digit : digit;
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
  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
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
  Timer5() {
    this.router.navigateByUrl('/timer5');
    alert("click Finish You are not allowd to back");
}
  
}

