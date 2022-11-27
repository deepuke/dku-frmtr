# VueI18n()

- Option API

  - Create `VueI18n` instance with option
  - Create a `Vue` instance with `i18n` option

  ```js
  const i18n = VueI18n({
    //..options
  });

  new Vue({ i18n }).$mount("#app");
  ```

- Composition API

  - create `i18n` instance with option using VueI18n.`createI18n({})`
  - create the Vue root instance
  - install i18n to make the whole app i18n aware

  ```js
  const i18n = VueI18n.createI18n();
  const app = Vue.createApp();
  app.use(i18n);
  ```

## Scoping and Locale changing

Vue I18n manages resources to offer i18n features

- global scope
  - centrally manage i18n resources across your application
- local scope
  - only that component’s scope is enabled
  - inherited from parent scope. (Can ctrl using `sync` flag in i18nConfigOption object)
  - fallback to parent configuration
