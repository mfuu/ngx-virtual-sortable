import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '../../layout/default/layout-default.component';
import { DemoBasicComponent } from './components/basic.component';
import { DemoGroupComponent } from './components/group.component';
import { DemoHorizontalComponent } from './components/horizontal.component';
import { DemoTableComponent } from './components/table.component';
import { DemoScrollToComponent } from './components/scrollto.component';
import { DemoInfinityComponent } from './components/infinity.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full',
      },
      {
        path: 'basic',
        component: DemoBasicComponent,
      },
      {
        path: 'group',
        component: DemoGroupComponent,
      },
      {
        path: 'horizontal',
        component: DemoHorizontalComponent,
      },
      {
        path: 'scrollto',
        component: DemoScrollToComponent,
      },
      {
        path: 'infinity',
        component: DemoInfinityComponent,
      },
      {
        path: 'table',
        component: DemoTableComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
