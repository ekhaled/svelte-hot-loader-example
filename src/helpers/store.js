import { Store } from 'svelte/store.js'

class store extends Store {

}

if (module.hot) {
  module.hot.accept();
}

export default new store({
  flag: false,
  name: 'Svelte Hot Loader Example',
  description: 'Example repo to demonstrate svelte-hot-loader usage'
});