# Dump filter for Vue
🐞 Tiny logger for Vue you can use in templates.

## Installation
```sh
$ npm i @lucien144/vue-dump-filter
```

```js
import VueDump from '@lucien144/vue-dump-filter';
Vue.use(VueDump, { production: process.env.NODE_ENV === 'production' });
```

## Usage

You can use it as a Vue filter: `|dump`

```vue
// component.vue
<template>
	{{ title|dump }}
</template>
```

Additionally you can use it as a Vue instance method `$dump()`
```vue
// component.vue
<template>
	<input type=text @keyup="$dump">
</template>
<script>
export default {
	methods: {
		login(username) {
			this.$dump(username);
		}
	}
}
</script>
```

## What's the difference between `console.log`?
1. You can't use `console.log` in the template section of single file components.
1. When dumping reactive objects using `console.log` all values are usually hidden behind `...`. You also output all getters and setters. The `$dump` dumps plain object:

### `console.log`
![http://144.wtf/NrCSHF+](http://144.wtf/NrCSHF+)

### `this.$dump`
![http://144.wtf/VvpDmk+](http://144.wtf/VvpDmk+)