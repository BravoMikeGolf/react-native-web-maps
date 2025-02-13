const { createWebpackConfigAsync } = require('expo-yarn-workspaces/webpack');

module.exports = async function (env, argv) {
  const config = await createWebpackConfigAsync(env, argv);

  // If your configuration defines unsupported node options, remove them:
  if (typeof config.node === 'object') {
    delete config.node.module;
    delete config.node.dgram;
    delete config.node.dns;
    delete config.node.fs;
    delete config.node.http2;
    delete config.node.net;
    delete config.node.tls;
    delete config.node.child_process;
  }

  config.resolve.alias['react-native-maps'] = '@teovilla/react-native-web-maps';

  return config;
};
