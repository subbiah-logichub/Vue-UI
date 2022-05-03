import { createStore } from "vuex";

import { themeChanger } from "@/views/theme-changer/store";
import { irl } from "@/views/irl/store";

export default createStore({
  modules: { themeChanger, irl },
});
