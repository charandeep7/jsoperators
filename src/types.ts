import { Icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";

export type Operator = {
  name: string;
  component: React.ReactElement;
  icon: string | React.ReactElement;
  moreInfo: string;
};
