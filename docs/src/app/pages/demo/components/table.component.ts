import { Component } from '@angular/core';
import { getPageData } from '../../../shared/utils';

@Component({
  selector: 'demo-basic',
  template: `
    <table #tableScroller class="list">
      <thead style="position: sticky; top: 0px;">
        <tr>
          <th style="width: 15%;">Index</th>
          <th style="width: 25%;">Name</th>
          <th style="width: 60%;">Desc</th>
        </tr>
      </thead>
      <tbody
        virtual-list
        [scroller]="tableScroller"
        dataKey="id"
        [tableMode]="true"
        [(ngModel)]="list"
      >
        <ng-template let-item let-index="index">
          <tr class="row">
            <td>{{ index }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.desc }}</td>
          </tr>
        </ng-template>
      </tbody>
    </table>
  `,
  styleUrls: ['../demo.component.less'],
})
export class DemoTableComponent {
  public list = [];

  constructor() {}

  ngOnInit() {
    this.list = getPageData(1000, 0);
  }
}
