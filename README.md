Matt Lib - The lib of Matt
==========================

A bunch of micro libraries that I use a bunch

# action-map
npm: `@beattyml1/action-map`

```ts
import {actionDispatcher} from '@beattyml1/action-map';
import {store} from './your-store'
import {actions} from './your-actions'

export const dispatcher = actionDispatcher(store, actions);
dispatch.setSomeData(somePayload) // Strong typed both on func name and the payload type!
```

In theory should work for vuex or redux as long as 
```ts
type Store = { dispatch: (name: string, payload: any) => any
type Action = (state: State, payload) => State
```

# getter-map
npm: `@beattyml1/getter-map`

```ts
import {actionDispatcher} from '@beattyml1/action-map';
import {store} from './your-store'
import {getters} from './your-getters'

export const get = actionDispatcher(store, actions);
let x = get.setSomeData; // Strongly Typed both the name and type!
```


# map-properties
npm: `@beattyml1/map-properties`

```ts
import {mapProperties} from '@beattyml1/map-properties';
import {obj} from './your-code'

export const objPropNames = mapProperties(obj, key => key);
```

# compose
npm: `@beattyml1/compose`

```ts
import {pipe} from '@beattyml1/compose'

let add = (x: number, y: number) => x + y;
let add1 = x => add(x, 1)


let x = pipe(1)
    .to(add1)
    .to(add, 2)
    .to(x => x + 1)
    .to(x => [x, 1])
    .to(([x, y]) => x + y)
    .to(x => x.toFixed())
    .result()
```