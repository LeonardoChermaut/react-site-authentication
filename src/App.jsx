import { Fragment, React } from "react";
import { MemorizedFooter } from "./components/index";
import { AppRoutes } from "./routers";

export const App = () => {
  return (
    <Fragment>
      <AppRoutes/>
      <MemorizedFooter />
    </Fragment>
  );
};
