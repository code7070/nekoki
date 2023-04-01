import React from "react";
import * as Icons from "./assets";

interface Icon {
  type: string;
  width: number;
  height: number;
}

export default function Icon({ type, width, height }: Icon) {
  return Icons[type];
}
