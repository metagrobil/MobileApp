import { Component } from '@angular/core';
import { JeeBackendProvider } from '../../providers/jee-backend/jee-backend'

/**
 * Generated class for the MetricComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'metric',
  templateUrl: 'metric.html'
})
export class MetricComponent {

  text: string;
  user: string = "Baptiste";

  constructor(public jeeBackendProviderJee : JeeBackendProvider) {
    this.text = this.user + "s Metrics";
  }

}
