# VueJS

- Vue2

  ```js
  new Vue({
    el: "#app",
    // Attach the Vue instance to the window,
    // so it's available globally.
    created: function () {
      window.Vue = this;
    },
    router,
    store,
    render: (h) => h(App),
  });
  ```

- `createApp` from vue3

  - The application instance

  ```js
  import { createApp } from "vue";
  const app = createApp(/* ... */);
  app.mount("#app");
  ```

## Slot Vs Scoped Slot

- Slot is a placeholder(slot-outlet) for "slot content" provided from the parent component.

  - Child template is compiled in the parent scope and the result is passed to child component
  - `Child component properties` are `not accessible` in parent

- Scoped Slot

  - Same as Slot but it have a mechanism to access the `child component properties`
  - Example

    - default scoped slot

      ```html
      <MyComponent v-slot="{ text, count }">
        {{ text }} {{ count }}
      </MyComponent>

      <!-- OR -->
      <!-- <MyComponent> template -->
      <div>
        <slot :text="greetingMessage" :count="1"></slot>
      </div>
      ```

    - Named Scoped Slots work similarly - slot props are accessible as the value of the v-slot directive: v-slot:name="slotProps"

    ```html
    <MyComponent>
      <template #header="headerProps"> {{ headerProps }} </template>

      <template #default="defaultProps"> {{ defaultProps }} </template>

      <template #footer="footerProps"> {{ footerProps }} </template>
    </MyComponent>

    <!-- Passing props to a named slot: -->
    <slot name="header" message="hello"></slot>
    ```
