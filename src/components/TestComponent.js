import { h } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t } = useI18n();
    return () =>
      h("div", { id: "component" }, [
        h("h1", {}, "Component1"),
        h("p", {}, `Component1 locale messages: ${t("message.hello")}`),
        h("p", {}, [
          `Fallback global locale messages: ${t("message.greeting")}`,
        ]),
      ]);
  },
  i18n: {
    messages: {
      "en-US": { message: { hello: "hello component1" } },
      "ja-JP": { message: { hello: "こんにちは、component1" } },
    },
  },
};
