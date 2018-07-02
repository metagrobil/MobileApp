import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPage: string;
  token: string;

  constructor(public iab: InAppBrowser, public http: HTTP) {
    this.currentPage = "";
  }

  login(): void {
    var eliotCode = '';
    var browser = this.iab.create("https://partners-login.eliotbylegrand.com/authorize?client_id=358ca400-fdf6-4357-8cca-27caa6699197&response_type=code&state=0d8816d5-3e7f-4c86-8229-645137e0f222&redirect_uri=https://login.microsoftonline.com/tfp/oauth2/nativeclient",
      '_blank', "location=yes");
    browser.on('loadstop').subscribe(event => {
      if ((event.url).indexOf("code=") >= 0) {
        var url_string = event.url;
        var url = new URL(url_string);
        eliotCode = url.searchParams.get("code");
        browser.close();
      }
    });
    browser.on('exit').subscribe(event => {
      if (eliotCode != '') {
        this.http.post("https://partners-login.eliotbylegrand.com/token/",
          {
            client_id: '358ca400-fdf6-4357-8cca-27caa6699197',
            grant_type: 'authorization_code',
            code: eliotCode,
            client_secret: '*d,|`89Jnx/Ea5O8y$T724W4'
          },
          {
          })
          .then(data => {
            alert(data.data.access_token);
          })
          .catch(error => {
          });
      }
    });
  }



}