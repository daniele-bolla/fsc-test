import React from 'react';
import { FSCMoodlet } from '@/components/FSCMoodlet';
import { FSCDisplayMode, FSCState, FSCType } from '@/types/fsc-types';


export interface FSCGroupProps extends React.HtmlHTMLAttributes<HTMLElement> {
  states?: Record<FSCType, FSCState>;
  displayMode?: FSCDisplayMode;
}

export const FSCMoodletGroup: React.FC<FSCGroupProps> = ({
  states = {
    F: 'required',
    S: 'required',
    C: 'required'
  },
  displayMode = 'letter',
  className = '',
  ...props
}) => {

  const statesKeys = Object.keys(states) as FSCType[];
  const getMoodlet = statesKeys.map((type, i) => {
    return <FSCMoodlet
      key={i}
      displayMode={displayMode}
      fcsType={type}
      initialState={states[type]}
    >
    </FSCMoodlet>
  })
  return (
    <div className='flex gap-3' {...props} >
      {getMoodlet}
    </div>
  );
};

