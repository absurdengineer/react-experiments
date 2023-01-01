import { useState } from "react";

const useDarkMode = (defaultValue: boolean = false) => {
  return useState<boolean>(defaultValue);
};

export default useDarkMode;
