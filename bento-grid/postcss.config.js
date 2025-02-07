import generated from "@tailwindcss/postcss";

import autoprefixer from "autoprefixer";

module.exports = {
  plugins: [
    generated, // TailwindCSS PostCSS 플러그인
    autoprefixer, // 브라우저 호환성 prefix 추가
  ],
};
