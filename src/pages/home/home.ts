import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPage: string;
  token : string;

  constructor(public iab: InAppBrowser, public http :Http) {
    console.log(" MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES MES GROSSES COUILLES");
    this.currentPage = "";
  }

  login(): void {
    var browser = this.iab.create("https://partners-login.eliotbylegrand.com/authorize?client_id=358ca400-fdf6-4357-8cca-27caa6699197&response_type=code&state=0d8816d5-3e7f-4c86-8229-645137e0f222&redirect_uri=https://login.microsoftonline.com/tfp/oauth2/nativeclient",
      '_self', "location=no, clearcache=yes, zoom:no");
      
      browser.on('loadstart').subscribe(event =>  {
        if ((event.url).indexOf("code=") >= 0) {
          browser.close();
          console.log(event.url);
          var split = event.url.split('code=');
          var code = split[1];
          console.log(code);
        }
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
