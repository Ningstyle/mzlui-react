import React from 'react';
import TextArea from '../../../packages/TextArea/TextArea';

export default function Demo() {
   return (
      <div>
         <TextArea resize="none" />
         <TextArea resize="horizontal" />
         <TextArea resize="vertical" />
         <TextArea resize="both" />
      </div>
   )
}