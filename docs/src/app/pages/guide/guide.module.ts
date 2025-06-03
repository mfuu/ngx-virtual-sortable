import { NgModule } from '@angular/core';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideComponent } from './guide.component';
import { MarkedPipe } from '../../shared/pipes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GuideComponent, MarkedPipe],
  imports: [CommonModule, GuideRoutingModule],
  exports: [],
  providers: [MarkedPipe],
})
export class GuideModule {}
