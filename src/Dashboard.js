import React from 'react';

// mfe-library
import { PersonalDetails } from 'library/PersonalDetails';
import { TimeNow } from 'library/TimeNow';

// mfe-dashboard
import { DashboardApp } from 'dashboard/DashboardApp';

export default () => {
  return (
    <>
      <TimeNow />
      <PersonalDetails dob='04/10/1979' name='Joe Burton' />
      <DashboardApp />
    </>
  );
};
