import React from 'react';
import { FSCDisplayMode, FSCState, FSCType } from '@/types/fsc-types';
import useFSCStateMachine from '@/hooks/useFSCStateMachine';
import { match } from '@/utils/match';
import { MoodletButton, MoodletButtonVariant } from '@/components/MoodletButton';

export interface FSCMoodletProps extends React.HTMLAttributes<HTMLElement> {
  displayMode?: FSCDisplayMode;
  initialState?: FSCState;
  fcsType: FSCType
}
const isLetter = (displayMode: FSCDisplayMode) => displayMode == 'letter';

function getLabel(type: FSCType, displayMode: FSCDisplayMode) {
  return match<FSCType, string>(type)([
    ['F', () => isLetter(displayMode) ? type : 'FUELLING'],
    ['S', () => isLetter(displayMode) ? type : 'SERVICING'],
    ['C', () => isLetter(displayMode) ? type : 'CLEANING']
  ]);
}

const getVariantFromState = {
  required: "inactive",
  current: "red",
  completed: "green",
  "not-required": "inactive"
};

export const FSCMoodlet: React.FC<FSCMoodletProps> = ({
  displayMode = 'letter',
  initialState = 'required',
  fcsType = 'F',
  className = '',
  ...props
}) => {

  const { state, handleLeftClick, handleRightClick } = useFSCStateMachine(initialState);
  const label = getLabel(fcsType, displayMode)

  const variant = getVariantFromState[state] as MoodletButtonVariant;
  const isDisabled = state == 'not-required';

  return (
    <MoodletButton
      displayMode={displayMode}
      content={label}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      variant={variant}
      disabled={isDisabled}
      className={className}
      {...props}
    />
  );
};