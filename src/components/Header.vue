<template>
  <b-nav>
    <b-nav-item active>Active</b-nav-item>
    <b-nav-item
      ><b-form-select
        v-model="ex1Selected"
        :options="ex1Options"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ ex1Selected }}</strong>
      </div></b-nav-item
    >
    <b-nav-item
      ><b-form-select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </b-form-select></b-nav-item
    >
    <b-nav-item disabled>Disabled</b-nav-item>
  </b-nav>
</template>
<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const ex1Selected = ref();
    const ex1Options = [
      { value: null, text: "Please select an option" },
      { value: "a", text: "This is First option" },
      { value: "b", text: "Selected Option" },
      { value: { C: "3PO" }, text: "This is an option with object value" },
      { value: "d", text: "This one is disabled", disabled: true },
    ];
    const { availableLocales } = useI18n();
    console.log(availableLocales);
    console.log("Header component setup");

    return {
      ex1Selected,
      ex1Options,
    };
  },
};
</script>
