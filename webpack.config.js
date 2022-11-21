const createExpoWebpackConfigAsync = require("@expo/webpack-config");
// AFL. Recovered from: https://forums.expo.dev/t/expo-start-web-failed-to-compile-after-import-native-base/40826/9
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@codler/react-native-keyboard-aware-scroll-view",
        ],
      },
    },
    argv
  );
  return config;
};
