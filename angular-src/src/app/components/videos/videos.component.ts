import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';


// const URL = '/api/';
const URL = 'mongodb://sivareddy:11491a04a8@ds239387.mlab.com:39387/sivareddy';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
 
  authToken: any;
  user: any;
  isDev:boolean;

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }


  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    alert("logging out..");
   
  }
}
