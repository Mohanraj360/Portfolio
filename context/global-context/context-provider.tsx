import GlobalContext from "@/context/global-context/global-context";
import { PropsWithChildren, useState } from "react";

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [openMenu, setOpenMenu] = useState(false);
  const providerValue = {
    stateValue: openMenu,
    setState: setOpenMenu
  };
  return <GlobalContext.Provider value={providerValue}>{children}</GlobalContext.Provider>;
}
