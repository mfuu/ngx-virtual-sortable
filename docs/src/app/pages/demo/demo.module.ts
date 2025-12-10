import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VirtualListModule } from 'public-api';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoBasicComponent } from './components/basic.component';
import { DemoGroupComponent } from './components/group.component';
import { DemoHorizontalComponent } from './components/horizontal.component';
import { DemoTableComponent } from './components/table.component';
import { DemoScrollToComponent } from './components/scrollto.component';
import { DemoInfinityComponent } from './components/infinity.component';

@NgModule({
  declarations: [
    DemoBasicComponent,
    DemoGroupComponent,
    DemoHorizontalComponent,
    DemoTableComponent,
    DemoScrollToComponent,
    DemoInfinityComponent,
  ],
  imports: [FormsModule, DemoRoutingModule, VirtualListModule],
})
export class DemoModule {}
