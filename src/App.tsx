import { Fragment } from 'react';

import { ResponsiveAppBar } from './components/AppBar';
import { AppStepper } from './components/AppStepper';

export default function App() {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <AppStepper />
    </Fragment>
  );
}
