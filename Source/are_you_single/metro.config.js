// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Đây là phần quan trọng
module.exports = withNativeWind(config, {
  // Hãy đảm bảo bạn có file global.css ở thư mục gốc
  input: "./src/app/global.css",
});
