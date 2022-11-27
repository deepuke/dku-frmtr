<script setup>
import { useI18n } from "vue-i18n";
import { formatter } from "../formatters";
defineProps({
  msg: String,
});

const { n } = useI18n();
const formattedNumber = n(123456788);
</script>

<template>
  <div id="string-syntax">
    <p v-t="'message.hello'"></p>
  </div>
  <p>Formatted Number: {{ formattedNumber }}</p>
  <p>Formatter values: {{ formatter(n, 12345.66778, "decimal") }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
