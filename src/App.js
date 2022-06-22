import React, { lazy, Suspense } from 'react';

// Import components exported from the MFE library
import { Button, PersonalDetails, TimeNow } from 'library/Components';

// MFE Dashboard
const Dashboard = lazy(() => import('dashboard/Dashboard'));

// Example of lazy loaded components from MFE (library)
import LazyLoadComponents from './LazyLoadComponents';

import Facts from './Facts';

const App = () => (
  <section>
    <h1>HOST APPLICATION (MFE)</h1>
    <hr />
    <PersonalDetails name='Joe Burton' dob='04/10/1979' />
    <TimeNow />
    <Button text='My Custom Button' />
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
    <LazyLoadComponents />
    <Facts />
  </section>
);

export default App;
