import React from "react";
// dumi 会为我们自动建立组件库 NPM 包 -> 组件库源代码的映射关系。 ??
import { Button } from "@ibox/antd";

const App: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);

export default App;
