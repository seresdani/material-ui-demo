import { Fragment } from "react";

import { ResponsiveAppBar } from "./components/AppBar";
import { AppStepper } from "./components/AppStepper";

declare module "@mui/material/styles" {
  interface Palette {
    cropsterSecondary: Palette["primary"];
  }

  interface PaletteOptions {
    cropsterSecondary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    cropsterSecondary: true;
  }
}

export default function App() {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <AppStepper />
    </Fragment>
  );
}
