<script>
export default {
  name: "SfcTest",
};
</script>

<template>
  <label for="locale">locale</label>
  <select v-model="$i18n.locale">
    <option>en-US</option>
    <option>ja-JP</option>
  </select>
  <p>message: {{ $t("hello") }}</p>
</template>

<i18n>
{
  "en-US": {
    "hello": "hello world! - Deepu"
  },
  "ja-JP": {
    "hello": "こんにちは、世界！- Deepu"
  }
}
</i18n>
