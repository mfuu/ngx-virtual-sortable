import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualItem } from './virtual-item.directive';
import { VirtualListComponent } from './virtual-list.component';

@NgModule({
  declarations: [VirtualListComponent, VirtualItem],
  imports: [CommonModule],
  exports: [VirtualListComponent],
})
export class VirtualListModule {}
