import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDefaultComponent } from '../../layout/default/layout-default.component';
import { GuideComponent } from './guide.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full',
      },
      {
        path: 'start',
        component: GuideComponent,
        data: { file: 'assets/start.md' },
      },
      {
        path: 'emit',
        component: GuideComponent,
        data: { file: 'assets/emit.md' },
      },
      {
        path: 'prop',
        component: GuideComponent,
        data: { file: 'assets/prop.md' },
      },
      {
        path: 'method',
        component: GuideComponent,
        data: { file: 'assets/method.md' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule {}
