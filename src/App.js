import React, { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./DashboardApp'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <h1>This is a host application</h1>
    <hr />
    <Dashboard />
  </Suspense>
);

export default App;
