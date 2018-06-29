import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'no',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
};

  currentPage: string;
  token : string;

  constructor(public iab: InAppBrowser) {
    this.currentPage = "";
  }

  login(): void {
    var browser = this.iab.create("https://partners-login.eliotbylegrand.com/authorize?client_id=358ca400-fdf6-4357-8cca-27caa6699197&response_type=code&state=0d8816d5-3e7f-4c86-8229-645137e0f222&redirect_uri=https://login.microsoftonline.com/tfp/oauth2/nativeclient",
      '_blank', this.options);
    let listener = browser.on("loadstart")
      .subscribe((envent: any) => {
        console.log(envent);
      });
  }
  openWebpage(url: string) {
    var browser = this.iab.create("https://partners-login.eliotbylegrand.com/authorize?client_id=358ca400-fdf6-4357-8cca-27caa6699197&response_type=code&state=0d8816d5-3e7f-4c86-8229-645137e0f222&redirect_uri=https://login.microsoftonline.com/tfp/oauth2/nativeclient",
      '_blank', "location=no, clearcache=yes");
    //.on("loadstart").subscribe() ;
    //window.open("https://partners-login.eliotbylegrand.com/authorize?client_id=358ca400-fdf6-4357-8cca-27caa6699197&response_type=code&state=0d8816d5-3e7f-4c86-8229-645137e0f222&redirect_uri=https://login.microsoftonline.com/tfp/oauth2/nativeclient")
    //browser.on('').subscribe();

  }
}
