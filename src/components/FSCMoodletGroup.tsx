import React from 'react';
import { FCSMoodlet } from '@/components/FSCMoodlet';
import { DisplayMode, FSCState, FSCType } from '@/types/fsc-types';


export interface FSCGroupProps extends React.HtmlHTMLAttributes<HTMLElement> {
  states?: Record<FSCType, FSCState>;
  displayMode?: DisplayMode;
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
    return <FCSMoodlet
      key={i}
      displayMode={displayMode}
      fcsType={type}
      initialState={states[type]}
    >
    </FCSMoodlet>
  })
  return (
    <div className='flex gap-3' {...props} >
      {getMoodlet}
    </div>
  );
};

