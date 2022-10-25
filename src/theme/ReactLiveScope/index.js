import * as StardustComponents from "@stardust-ds/react";
import * as phosphorIcons from "phosphor-react";
import React from "react";

import DownloadIcon from "@site/static/img/DownloadIcon";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  DownloadIcon,
  ...StardustComponents,
  ...phosphorIcons,
};
export default ReactLiveScope;
