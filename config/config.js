export default {
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /\.test\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//
          ]
        }
      }
    ]
  ]
};
