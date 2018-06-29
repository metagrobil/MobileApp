import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the JeeBackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JeeBackendProvider {

  deviceList :any = [];
  constructor(public http: Http) {
    console.log('Hello JeeBackendProvider Provider');
  }

  loadDevices(): void {
    this.deviceList = [
      {deviceID: "1", deviceType: "Nom1"},
      {deviceID: "2", deviceType: "Nom2"},
      {deviceID: "3", deviceType: "Nom3"},
    ]

    this.http.get('https://reqres.in/api/users')
    .map(res => res.json())
    .subscribe(data => {
      console.log(data.data.lenght);
      for( var i = 0 ; i < data.data.lenght ; i++){
        console.log(i);
      }
     });
  }

}
