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
  metricList :any = [];
  user: string = "Bapt";
  constructor(public http: Http) {
    console.log('Hello JeeBackendProvider Provider');
  }

  public ListingLInkedDevices(): void {
    this.deviceList = [];
    this.http.get('http://10.133.130.195:11080/Backend/metric/metrics/getUserDevices?username=' + this.user)
    .map(res => res.json())
    .subscribe(data => {
      for( var i = 0 ; i < data[0][1].length ; i++){
        this.deviceList
        .push({deviceName: data[0][1][i][0],
           deviceType: data[0][1][i][1]});
      }
     });
  }

  public GetSimpleMetrics(test): void{
    alert(typeof(test));
    this.metricList = [];/*
    this.http.get('http://10.133.130.195:11080/Backend/metric/metrics/getMetric')
    .map(res => res.json())
    .subscribe(data => {
      alert(data[0].idDevices);
      for( var i = 0 ; i < data.length ; i++){
        this.metricList
        .push({value: data[i].idDevices,
           unit: data[i].value,
           range : "simple"});
      }
     });*/
  }

  public GetCalculatedMetrics(): void{
    this.metricList = [];
    this.http.get('https://reqres.in/api/users')
    .map(res => res.json())
    .subscribe(data => {
      for( var i = 0 ; i < data.data.length ; i++){
        this.metricList
        .push({value: data.data[i].id,
           unit: data.data[i].first_name,
           range : data.data[i].first_name});
      }
     });
  }

}
