import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { QuizService } from './services/quiz.service';
import { Section } from './services/section';
import { Section2 } from './services/section2';
import { Section4 } from './services/section4.service';
import { Section5 } from './services/section5';
import { Section6 } from './services/section6';
import { HelperService } from './services/helper.service';
import { FileUploadModule } from "ng2-file-upload";
import { FileUploader } from 'ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { TreeViewComponent } from '@syncfusion/ej2-ng-navigations';
import { PagerService } from './services/lessonDetails/pager.service';
import { ExamService } from './services/exam.service';
import { UserService } from './services/user.service';
import { AlertModule } from 'ng2-bootstrap';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AnonymousGuard } from './services/anonymous.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './components/test/test.component';


import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { NavbarService } from './services/navbar.service';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { PracticetestComponent } from 'app/components/practicetest/practicetest.component';
import { FulllengthTestComponent } from './components/fulllength-test/fulllength-test.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { StartComponent } from './components/start/start.component';
import { TipsComponent } from './components/tips/tips.component';
import { ExamComponent } from './components/exam/exam.component';
import { SectionComponent } from './components/section/section.component';
import { Section1Component } from './components/section1/section1.component';
import { ReviewComponent } from './components/review/review.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';

import { TimerComponent } from './components/timer/timer.component';
import { Timer1Component } from './components/timer1/timer1.component';
import { Timer2Component } from './components/timer2/timer2.component';
import { Timer3Component } from './components/timer3/timer3.component';
import { LandingComponent } from './components/landing/landing.component';
import { Test4Component } from './components/test4/test4.component';
import { Timer4Component } from './components/timer4/timer4.component';
import { Test5Component } from './components/test5/test5.component';
import { Test6Component } from './components/test6/test6.component';
import { Timer5Component } from './components/timer5/timer5.component';
import { Timer6Component } from './components/timer6/timer6.component';
import { VideosComponent } from './components/videos/videos.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { EvenComponent } from './components/lessonExams/even/even.component';
import { PercentComponent } from './components/lessonExams/percent/percent.component';
import { QuantitativeComponent } from './components/lessonExams/practicelessons/quantitative/quantitative.component';
import { RatiosComponent } from './components/lessonExams/ratios/ratios.component';
import { AlgebraComponent } from './components/lessonExams/algebra/algebra.component';
import { WordProblemsComponent } from './components/lessonExams/word-problems/word-problems.component';
import { AnglesComponent } from './components/lessonExams/angles/angles.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CalendarComponent } from './components/calendar/calendar.component';


const appRoutes: Routes =  [

  {path:'landing', component: LandingComponent},
  {path:'admin', component: AdminComponent},
  {path:'admin/login', component: AdminloginComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'forgot', component: ForgotComponent},
  {path:'reset', component: ResetComponent},
  {path:'practicetest', component: PracticetestComponent, canActivate:[AuthGuard]},
  {path:'full-length', component: FulllengthTestComponent, canActivate:[AuthGuard]},
  {path:'test', component: TestComponent, canActivate:[AuthGuard]},
  {path:'test2', component: Test2Component, canActivate:[AuthGuard]},
  {path:'test3', component: Test3Component, canActivate:[AuthGuard]},
  {path:'test4', component: Test4Component, canActivate:[AuthGuard]},
  {path:'test5', component: Test5Component, canActivate:[AuthGuard]},
  {path:'test6', component: Test6Component, canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'start', component: StartComponent, canActivate:[AuthGuard]},
  {path:'quiz', component: QuizComponent, canActivate:[AuthGuard]},
  {path:'tips', component: TipsComponent, canActivate:[AuthGuard]},
  {path:'exam', component: ExamComponent, canActivate:[AuthGuard]},
  {path:'section', component: SectionComponent, canActivate:[AuthGuard]},
  {path:'section1', component: Section1Component, canActivate:[AuthGuard]},
  {path:'review', component: ReviewComponent, canActivate:[AuthGuard]},
  {path:'timer', component: TimerComponent, canActivate:[AuthGuard]},
  {path:'timer1', component: Timer1Component, canActivate:[AuthGuard]},
  {path:'timer2', component: Timer1Component, canActivate:[AuthGuard]},
  {path:'timer3', component: Timer1Component, canActivate:[AuthGuard]},
  {path:'timer4', component: Timer1Component, canActivate:[AuthGuard]},
  {path:'timer5', component: Timer1Component, canActivate:[AuthGuard]},
  {path:'timer6', component: Timer1Component, canActivate:[AuthGuard]},
  {path:'feed-back', component: FeedbackFormComponent, canActivate:[AuthGuard]},
  {path:'admindashboard', component: AdminDashboardComponent, canActivate:[AuthGuard]},
  {path:'videos', component: VideosComponent, canActivate:[AuthGuard]},
  {path:'lessons', component: LessonsComponent, canActivate:[AuthGuard]},
  {path:'lessons/lessonDetails', component: LessonDetailsComponent, canActivate:[AuthGuard]},
  {path:'lessons/EvenandOdd', component: EvenComponent, canActivate:[AuthGuard]},
  {path:'lessons/percent', component: PercentComponent, canActivate:[AuthGuard]},
  {path:'practicelessons/quantitative', component: QuantitativeComponent, canActivate:[AuthGuard]},
  {path:'lessons/ratios', component: RatiosComponent, canActivate:[AuthGuard]},
  {path:'lessons/algebra', component: AlgebraComponent, canActivate:[AuthGuard]},
  {path:'lessons/word-problems', component: WordProblemsComponent, canActivate:[AuthGuard]},
  {path:'lessons/angles', component: AnglesComponent, canActivate:[AuthGuard]},
  {path:'header', component: HeaderComponent, canActivate:[AuthGuard]},
  {path:'calendar', component: CalendarComponent, canActivate:[AuthGuard]},
  {
    path: 'welcome',
    component: LoginComponent,
    canActivate: [AnonymousGuard]
},
  {path:'', component: LoginComponent},
  {path:'**', component: LoginComponent},
]

export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerName: 'x-auth-token',
    noTokenScheme: true,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ForgotComponent,ResetComponent, AdminComponent, AdminloginComponent,
    AdminDashboardComponent,
    PracticetestComponent,
    FulllengthTestComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    QuizComponent,
    StartComponent,
    TipsComponent,
    ExamComponent,
    SectionComponent,
    Section1Component,
    ReviewComponent,
    TimerComponent,
    FeedbackFormComponent,
    Timer1Component,
    Timer2Component,
    LandingComponent,
    Test4Component,
    Timer3Component,
    Timer4Component,
    Test5Component,
    Test6Component,
    Timer5Component,
    Timer6Component,
    VideosComponent,
    TreeViewComponent,
    LessonsComponent,
    LessonDetailsComponent,
    EvenComponent,
    PercentComponent,
    QuantitativeComponent,
    RatiosComponent,
    AlgebraComponent,
    WordProblemsComponent,
    AnglesComponent,
    HeaderComponent,
    SidebarComponent,
    CalendarComponent,

  
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    FileUploadModule,
    AlertModule.forRoot(),

   
  ],
  providers: [ValidateService, 
              AuthService, 
              AuthGuard,
              NavbarService,
              PagerService,
              Section,Section2, 
              ExamService,PagerService,
              UserService,
              {
                provide: AuthHttp,
                useFactory: getAuthHttp,
                deps: [Http]
              }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
}

