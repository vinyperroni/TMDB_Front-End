import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect } from "react";

export default function GlobalProvider(props) {
  return <GlobalContext.Provider>{props.children}</GlobalContext.Provider>;
}
