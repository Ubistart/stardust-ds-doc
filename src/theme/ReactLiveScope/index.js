import * as StardustComponents from "@stardust-ds/react";
import * as PhosphorIcons from "phosphor-react";
import React from "react";

import DownloadIcon from "@site/static/img/DownloadIcon";
import SELECT_OPTIONS from "@site/src/constants/selectionOptions";
import MENU_DATA from "@site/src/constants/menuData";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  DownloadIcon,
  ...StardustComponents,
  PhosphorIcons,
  SELECT_OPTIONS,
  MENU_DATA,
};
export default ReactLiveScope;
