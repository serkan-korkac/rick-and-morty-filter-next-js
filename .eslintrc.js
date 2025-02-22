module.exports = {
  extends: [
    'next/core-web-vitals', // Next.js için önerilen kurallar
    'plugin:@typescript-eslint/recommended', // TypeScript için önerilen kurallar
    'eslint:recommended', // Genel ESLint kuralları
    'plugin:prettier/recommended' // Prettier entegrasyonu
  ],
  parser: '@typescript-eslint/parser', // TypeScript dosyalarını analiz etmek için parser
  parserOptions: {
    ecmaVersion: 2020, // ECMAScript 2020'i kullanıyoruz
    sourceType: 'module' // modül bazında kaynak tipi
  },
  plugins: ['@typescript-eslint', 'prettier'], // Prettier ve TypeScript plugin'leri
  rules: {
    '@typescript-eslint/no-explicit-any': 'error', // `any` kullanımını yasaklıyoruz
    'no-console': 'warn', // `console.log` için uyarı veriyoruz
    'no-unused-vars': 'warn', // Kullanılmayan değişkenler için uyarı
    'prettier/prettier': 'error' // Prettier kurallarını zorunlu hale getiriyoruz
  }
};
