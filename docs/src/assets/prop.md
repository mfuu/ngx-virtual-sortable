# Props

## `ngModel`

| **Type** | **Default** | **Required** |
| -------- | ----------- | ------------ |
| `Array`  | `[]`        | `true`       |

The data that needs to be rendered

## `data-key`

| **Type** | **Default** | **Required** |
| -------- | ----------- | ------------ |
| `String` | `-`         | `true`       |

The unique identifier of each piece of data, in the form of `'a.b.c'`

## `scroller`

| **Type**                  | **Default**       | **Required** |
| ------------------------- | ----------------- | ------------ |
| `Document \| HTMLElement` | Virtual list wrap | `true`       |

Virtual list scrolling element

## `wrapper`

| **Type**      | **Default** |
| ------------- | ----------- |
| `HTMLElement` | `-`         |

Virtual list wrapper

> If a page has multiple virtual lists and the virtual lists are in the top-down structure, transfer the wrapper to avoid the situation that the page cannot be dragged.

## `keeps`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `30`        |

The number of lines rendered by the virtual scroll

## `size`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `0`         |

The estimated height of each piece of data, you can choose to pass it or not, it will be automatically calculated

## `handle`

| **Type** | **Default** |
| -------- | ----------- |
| `String` | `-`         |

Drag handle selector within list items

## `group`

| **Type**        | **Default** |
| --------------- | ----------- |
| `Object/String` | `-`         |

```js
string: 'name'
object: {
  name: 'group',
  put: true/false,
  pull: true/false/'clone',
  revertDrag: true/false
}
```

## `tableMode`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `false`     |

Display with table

## `keepOffset`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `false`     |

When scrolling up to load data, keep the same offset as the previous scroll

## `direction`

| **Type**                 | **Default** |
| ------------------------ | ----------- |
| `vertical \| horizontal` | `vertical`  |

Virtual list scroll direction

## `lockAxis`

| **Type** | **Default** |
| -------- | ----------- |
| `x \| y` | `-`         |

Axis on which dragging will be locked

## `debounceTime`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `0`         |

debounce time on scroll

## `throttleTime`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `0`         |

throttle time on scroll

## `sortable`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `true`      |

Whether the current list can be sorted by dragging

## `disabled`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `false`     |

Disables the sortable if set to true

## `draggable`

| **Type** | **Default**     |
| -------- | --------------- |
| `String` | `[role="item"]` |

Specifies which items inside the element should be draggable

## `animation`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `150`       |

Animation speed moving items when sorting

## `autoScroll`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `true`      |

Automatic scrolling when moving to the edge of the container

## `scrollSpeed`

| **Type** | **Default**        |
| -------- | ------------------ |
| `Object` | `{ x: 10, y: 10 }` |

Vertical&Horizontal scrolling speed (px)

## `scrollThreshold`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `55`        |

Threshold to trigger autoscroll

## `delay`

| **Type** | **Default** |
| -------- | ----------- |
| `Number` | `0`         |

Time in milliseconds to define when the sorting should start

## `delayOnTouchOnly`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `false`     |

Only delay on press if user is using touch

## `fallbackOnBody`

| **Type**  | **Default** |
| --------- | ----------- |
| `Boolean` | `false`     |

Appends the ghost element into the document's body

## `ghostClass`

| **Type** | **Default** |
| -------- | ----------- |
| `String` | `-`         |

The class of the mask element when dragging

## `ghostStyle`

| **Type** | **Default** |
| -------- | ----------- |
| `Object` | `{}`        |

The style of the mask element when dragging

## `chosenClass`

| **Type** | **Default** |
| -------- | ----------- |
| `String` | `-`         |

Class name for the chosen item

## `placeholderClass`

| **Type** | **Default** |
| -------- | ----------- |
| `String` | `-`         |

Class name for the drop placeholder
