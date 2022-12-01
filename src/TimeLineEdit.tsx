import { Timeline } from '@xzdarcy/react-timeline-editor';
import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';

import { mockData, mockEffect } from './mock';


const sty = {
    width: "100%",
    height:"200px"  
}
const defaultEditorData = cloneDeep(mockData);

const TimelineEditor = () => {
  const [data, setData] = useState(defaultEditorData);

  return (
   <div className='time-line'>
    <Timeline
            onChange={setData}
            editorData={data}
            effects={mockEffect}
            hideCursor={false}
            style = {sty}
        />
   </div>
      

  );
};

export default TimelineEditor;