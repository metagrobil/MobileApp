import { NgModule } from '@angular/core';
import { MetricComponent } from './metric/metric';
import { CommandComponent } from './command/command';
@NgModule({
	declarations: [MetricComponent,
    CommandComponent],
	imports: [],
	exports: [MetricComponent,
    CommandComponent]
})
export class ComponentsModule {}
