import { FSCEvent, FSCState } from '@/types/fsc-types'
import { createMachine, StateMachineDefinition } from '@/utils/createMachine'
import { useReducer, useEffect, useRef, useCallback } from 'react'

type FSCAction =
  | { type: 'LEFT_CLICK' }
  | { type: 'RIGHT_CLICK' }
  | { type: 'TRANSITION_TO'; payload: FSCState }

const machineConfig: StateMachineDefinition<FSCState, FSCEvent> = {
  initialState: 'required',
  states: {
    'not-required': {
      transitions: {
        rightClick: {
          target: 'required',
        },
      },
    },
    required: {
      transitions: {
        rightClick: {
          target: 'not-required',
        },
        leftClick: {
          target: 'current',
        },
      },
    },
    current: {
      transitions: {
        leftClick: {
          target: 'completed',
        },
      },
    },
    completed: {
      transitions: {
        rightClick: {
          target: 'required',
        },
        leftClick: {
          target: 'current',
        },
      },
    },
  },
}

function fscReducer(state: FSCState, action: FSCAction): FSCState {
  const machine = createMachine<FSCState, FSCEvent>(machineConfig)

  switch (action.type) {
    case 'LEFT_CLICK':
      return machine.transition(state, 'leftClick') || state
    case 'RIGHT_CLICK':
      return machine.transition(state, 'rightClick') || state
    // case 'TRANSITION_TO': EXTRA IMPLEMENTATION
    //   return action.payload
    default:
      return state
  }
}

export default function useFSCStateMachine(
  initialState: FSCState = 'required',
) {
  const [state, dispatch] = useReducer(fscReducer, initialState)
  const prevState = useRef<FSCState>(initialState)

  useEffect(() => {
    if (prevState.current === state) return

    console.log(`Leaving state: ${prevState.current}`)

    console.log(`Entering state: ${state}`)

    console.log(`Transition from ${prevState.current} to ${state}`)

    prevState.current = state
  }, [state])

  const handleLeftClick = useCallback(() => {
    dispatch({ type: 'LEFT_CLICK' })
  }, [])

  const handleRightClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      dispatch({ type: 'RIGHT_CLICK' })
    },
    [],
  )

  // const transitionTo = useCallback((newState: FSCState) => { EXTRA IMPLEMENTATION
  //   dispatch({ type: 'TRANSITION_TO', state: newState });
  // }, []);

  // const canTransition = useCallback(
  //   (event: 'rightClick' | 'leftClick') => {
  //     return !!(machineConfig[state]?.transitions as Record<'rightClick' | 'leftClick', { target: string }>)[event]
  //   },
  //   [state],
  // )

  return {
    state,
    handleLeftClick,
    handleRightClick,
  }
}
