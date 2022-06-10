import React, { lazy, Suspense } from 'react';

// MFE Library (optional, lazy load individual components)
// const Button = lazy(() => import('library/Button'));
// const PersonalDetails = lazy(() => import('library/PersonalDetails'));
// const TimeNow = lazy(() => import('library/TimeNow'));

// Import any component exported from the MFE library
import { Button, PersonalDetails, TimeNow } from 'library/Components';

// MFE Dashboard
const Dashboard = lazy(() => import('dashboard/Dashboard'));

// Example of lazy loaded components from MFE (library)
import LazyLoadComponents from './LazyLoadComponents';

const App = () => (
  <section>
    <h1>This is the host application</h1>
    <hr />
    <PersonalDetails name='Joe Burton' dob='04/10/1979' />
    <TimeNow />
    <Button text='My Custom Button' />
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
    <LazyLoadComponents />
  </section>
);

export default App;
