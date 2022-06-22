import React, { lazy, Suspense } from 'react';

// MFE Library (Lazy load individual components)
const Button = lazy(() => import('library/Button'));
const PersonalDetails = lazy(() => import('library/PersonalDetails'));
const TimeNow = lazy(() => import('library/TimeNow'));

const LazyLoadComponents = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <PersonalDetails name='Joe Burton' dob='04/10/1979' />
        <Button text='Lazy loaded button component' />
        <TimeNow />
      </Suspense>
    </>
  );
};

export default LazyLoadComponents;
