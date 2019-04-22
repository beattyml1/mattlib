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
dispatch.setSomeData(somePayload)
```

In theory should work for vuex or redux as long as 
```ts
type Store = { dispatch: (name: string, payload: any) => any
type Action = (state: State, payload) => State
```


# map-properties
npm: `@beattyml1/map-properties`

```ts
import {mapProperties} from '@beattyml1/map-properties';
import {obj} from './your-code'

export const objPropNames = mapProperties(obj, key => key);
```

