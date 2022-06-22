import React from 'react';

import { Button, PersonalDetails, TimeNow } from 'library/Components';

const Facts = () => {
  return (
    <>
      <PersonalDetails name='Joe Burton' dob='04/10/1979' />
      <Button text='Lazy loaded button component' />
      <TimeNow />
    </>
  );
};

export default Facts;
