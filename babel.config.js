module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
<<<<<<< HEAD
    plugins: ["expo-router/babel", "nativewind/babel"],
=======
    plugins: ["nativewind/babel", 'react-native-reanimated/plugin' ],
    
>>>>>>> b2a75ce20ec62ea8638a3b834241fa0bfbf385cf
  };
};
