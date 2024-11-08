import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        plugins: {
            '@stylistic/js': stylisticJs
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "quotes": ["error", "single"],
            "@stylistic/js/object-curly-spacing": ["error", "always"]
        },
    },
    {
        ignores: ["src/components/ui/*"]
    }
];
