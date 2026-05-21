import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    // 1. Применяем рекомендуемые правила ESLint
    js.configs.recommended,

    // 2. Отключаем правила, которые могут конфликтовать с Prettier
    eslintConfigPrettier,

    {
        // Применяем настройки ко всем JS-файлам
        files: ['**/*.{js,mjs,cjs}'],

        languageOptions: {
            ecmaVersion: 2021, // Соответствует es2021: true из старого видео
            sourceType: 'module',
            globals: {
                ...globals.browser, // Браузерная среда (window, document)
                ...globals.node, // Node.js среда (process, require и т.д.), которая была в старом видео
            },
        },

        // 3. Твои кастомные правила
        rules: {
            'no-console': 'off', // Запрещаем console.log, как ты и просил
            'no-unused-vars': 'warning',
        },
    },
];
