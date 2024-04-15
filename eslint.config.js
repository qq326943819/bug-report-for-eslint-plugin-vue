import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginVue from "eslint-plugin-vue";

export default [
  // ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],

  /**
   * keep end
   */
  // eslintPluginPrettierRecommended,
  // eslintConfigPrettier,
];
