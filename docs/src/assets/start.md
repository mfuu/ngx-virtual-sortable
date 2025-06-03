# Start

## Installation

```sh [npm]
$ npm i ngx-virtual-dnd-list
```

## Simple Usage

**`virutal-list.module.ts`**

```ts
...
import { VirtualListModule } from 'ngx-virtual-sortable';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    VirtualListModule
  ],
  providers: []
})
export class ListModule { }
```

**`virutal-list.component.ts`**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'virutal-list',
  template: `
    <div #scroller>
      <div
        virtual-list
        [scroller]="scroller"
        [dataKey]="'id'"
        [keeps]="30"
        [(ngModel)]="list"
        (ngModelChange)="onChange($event)"
      >
        <ng-template let-item let-index="index">
          <div class="list-item">
            <span>{{ index }}</span>
            <p>{{ item.text }}</p>
          </div>
        </ng-template>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  public list = [
    { id: 'a', text: 'aaa' },
    { id: 'b', text: 'bbb' },
    { id: 'c', text: 'ccc' },
    ...
  ];

  onChange(data) {
    // the data changes after the dragging ends
  }
}

```
