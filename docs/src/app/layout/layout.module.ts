import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from './default/layout-default.component';
import { LayoutEmptyComponent } from './empty/layout-empty.component';

@NgModule({
  declarations: [LayoutDefaultComponent, LayoutEmptyComponent],
  imports: [RouterModule],
  exports: [LayoutDefaultComponent, LayoutEmptyComponent],
})
export class LayoutModule {}
