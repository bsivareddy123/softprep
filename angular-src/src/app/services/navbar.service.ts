import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  visible: boolean;
  public myclass:string;
  constructor() { this.visible = false; this.myclass="style1"}

  hide() { this.visible = false; this.myclass="style1"}

  show() { this.visible = true; this.myclass="style2"}

}