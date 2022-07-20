import React from 'react';

import  PicHome  from '../UI_components/PicHome'

export default {
    title: 'Example/PicHome',
    component: PicHome
  };
  
  const Template = (args) => <PicHome {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'PicHome'
  };
  