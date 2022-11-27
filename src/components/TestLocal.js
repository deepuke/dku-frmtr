import { h, ref } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const count = ref(0);
    const { t } = useI18n();
    return () =>
      h(
        "button", // type
        {
          id: "counter",
          class: "counter",
          onClick: () => {
            count.value++;
          },
        },
        [`${t("message.noofclick")} ${count.value}`]
      );
  },
};
