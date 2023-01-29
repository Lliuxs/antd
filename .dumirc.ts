// dumi的配置文件
import path from "path";
import { defineConfig } from "dumi";

export default defineConfig({
  conventionRoutes: {
    // to avoid generate routes for .dumi/pages/index/components/xx
    exclude: [new RegExp("index/components/")],
  },
  resolve: {
    // 配置文档的解析目录
    docDirs: [{ type: "doc", dir: "docs" }],
    // src 目录下第一层级的 Markdown 文档会被解析为 /components 下的资产路由，
    // 我们可以通过配置项 resolve.atomDirs 对资产路由前缀及解析目录进行更改。
    atomDirs: [{ type: "component", dir: "components" }],
    // 配置代码块的解析模式
    // codeBlockMode: "passive",
  },
  // locales: [
  //   { id: "en-US", name: "English", suffix: "" },
  //   { id: "zh-CN", name: "中文", suffix: "-cn" },
  // ],
  alias: {
    // foo: require.resolve('foo'),
    // "@ibox/antd": path.join(__dirname, "components"),
    "@ibox/antd/lib": path.join(__dirname, "components"),
    "@ibox/antd/es": path.join(__dirname, "components"),
    "@ibox/antd/locale": path.join(__dirname, "components/locale"),
    // Change antd from `index.js` to `.dumi/theme/antd.js` to remove deps of root style
    "@ibox/antd": require.resolve("./.dumi/theme/antd.js"),
  },
  mfsu: false,
  clickToComponent: {},
});
