import React, { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <h1>This is the host application</h1>
    <hr />
    <Dashboard />
  </Suspense>
);

export default App;
