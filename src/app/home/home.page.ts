import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public textToCode : string;
  public myAngularxQrCode : string = null;
  constructor() {}

  createQRCode(){
    this.myAngularxQrCode= this.textToCode;
    this.textToCode = "";
  }
}
