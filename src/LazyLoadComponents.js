import React, { lazy, Suspense } from 'react';

const Button = lazy(() => import('library/Button'));

const LazyLoadComponents = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Button text='Lazy loaded button component' />
      </Suspense>
    </>
  );
};

export default LazyLoadComponents;
