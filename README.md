# ngx-virtual-sortable

[![npm](https://img.shields.io/npm/v/ngx-virtual-sortable.svg)](https://www.npmjs.com/package/ngx-virtual-sortable) [![npm](https://img.shields.io/npm/dm/ngx-virtual-sortable.svg)](https://www.npmjs.com/package/ngx-virtual-sortable) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)

A virtual scrolling list component that can be sorted by dragging

### [Live demo](https://mfuu.github.io/ngx-virtual-sortable/)

## Simple usage

```bash
npm i ngx-virtual-sortable
```

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

## EventEmitters

| **Event**     | **Description**                  |
| ------------- | -------------------------------- |
| `onTop`       | scrolled to top                  |
| `onBottom`    | scrolled to bottom               |
| `onDrag`      | the drag is started              |
| `onDrop`      | the drag is completed            |
| `rangeChange` | triggered when the range changes |

## Attributes

### Required Attributes

| **Prop**   | **Type**                  | **Description**                                                       |
| ---------- | ------------------------- | --------------------------------------------------------------------- |
| `data-key` | `String`                  | The unique identifier of each piece of data, in the form of `'a.b.c'` |
| `scroller` | `HTMLElement \| Document` | Virtual list scrolling element                                        |

### Optional Attributes

**Commonly used**

| **Prop**       | **Type**                 | **Default** | **Description**                                                                                                   |
| -------------- | ------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `keeps`        | `Number`                 | `30`        | The number of lines rendered by the virtual scroll                                                                |
| `size`         | `Number`                 | `-`         | The estimated height of each piece of data, you can choose to pass it or not, it will be automatically calculated |
| `handle`       | `Function/String`        | `-`         | Drag handle selector within list items                                                                            |
| `group`        | `Object/String`          | `-`         | string: 'name' or object: `{ name: 'group', put: true/false, pull: true/false/'clone', revertDrag: true/false }`  |
| `direction`    | `vertical \| horizontal` |             | scroll direction                                                                                                  |
| `lockAxis`     | `x \| y`                 | `-`         | Axis on which dragging will be locked                                                                             |
| `tableMode`    | `Boolean`                | `false`     | Using Virtual Lists in Tabular Mode                                                                               |
| `keepOffset`   | `Boolean`                | `false`     | When scrolling up to load data, keep the same offset as the previous scroll                                       |
| `debounceTime` | `Number`                 | `0`         | debounce time on scroll                                                                                           |
| `throttleTime` | `Number`                 | `0`         | throttle time on scroll                                                                                           |

**Uncommonly used**

| **Prop**           | **Type**      | **Default**       | **Description**                                                                                                                |
| ------------------ | ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `wrapper`          | `HTMLElement` | `-`               | Virtual list wrapper                                                                                                           |
| `sortable`         | `Boolean`     | `true`            | Allow Sorting by Dragging                                                                                                      |
| `draggable`        | `String`      | `[role="item"]`   | Specifies which items inside the element should be draggable. If does not set a value, the default list element can be dragged |
| `disabled`         | `Boolean`     | `false`           | Disables the sortable if set to true                                                                                           |
| `animation`        | `Number`      | `150`             | Animation speed moving items when sorting                                                                                      |
| `autoScroll`       | `Boolean`     | `true`            | Automatic scrolling when moving to the edge of the container                                                                   |
| `scrollSpeed`      | `Object`      | `{ x: 10, y: 10}` | Vertical&Horizontal scrolling speed (px)                                                                                       |
| `scrollThreshold`  | `Number`      | `55`              | Threshold to trigger autoscroll                                                                                                |
| `delay`            | `Number`      | `0`               | Time in milliseconds to define when the sorting should start                                                                   |
| `delayOnTouchOnly` | `Boolean`     | `false`           | Only delay on press if user is using touch                                                                                     |
| `fallbackOnBody`   | `Boolean`     | `false`           | Appends the ghost element into the document's body                                                                             |
| `ghostClass`       | `String`      | `''`              | The class of the mask element when dragging                                                                                    |
| `ghostStyle`       | `Object`      | `{}`              | The style of the mask element when dragging                                                                                    |
| `chosenClass`      | `String`      | `''`              | The class of the selected element when dragging                                                                                |
| `placeholderClass` | `String`      | `''`              | Class name for the drop placeholder                                                                                            |

> If a page has multiple virtual lists and the virtual lists are in the top-down structure, transfer the wrapper to avoid the situation that the page cannot be dragged.

## Public Methods

| **Method**               | **Description**                                            |
| ------------------------ | ---------------------------------------------------------- |
| `getSize(key)`           | Get the size of the current item by unique key value       |
| `getOffset()`            | Get the current scroll height                              |
| `getClientSize()`        | Get wrapper element client viewport size (width or height) |
| `getScrollSize()`        | Get all scroll size (scrollHeight or scrollWidth)          |
| `scrollToTop()`          | Scroll to top of list                                      |
| `scrollToBottom()`       | Scroll to bottom of list                                   |
| `scrollToKey(key)`       | Scroll to the specified data-key position                  |
| `scrollToIndex(index)`   | Scroll to the specified index position                     |
| `scrollToOffset(offset)` | Scroll to the specified offset                             |

**Usage**

```ts
import { Component, ViewChild } from '@angular/core';
import { VirtualListComponent } from 'ngx-virtual-sortable';

@Component({
  selector: 'virutal-list',
  template: `
    <div #scroller>
      <virtual-list
        #virtualList
        ...
      >
        ...
      </virtual-list>
    </div>
    <button (click)="scrollToBottom()">scroll to bottom</button>
  `,
  styles: [],
})
export class ListComponent {
  @ViewChild('virtualList') virtualList: VirtualListComponent;

  scrollToBottom() {
    this.virtualList.scrollToBottom();
  }
}
```
