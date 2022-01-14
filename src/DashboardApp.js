import { mount } from 'dashboard/DashboardApp';
import { SimpleComponent } from 'library/SimpleComponent';
import { TimeNow } from 'library/TimeNow';

import React, { useRef, useEffect } from 'react';
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);
  return (
    <div>
      <TimeNow />
      <SimpleComponent dob='04/10/1979' name='Joe Burton' />
      <div ref={ref} />
    </div>
  );
};
