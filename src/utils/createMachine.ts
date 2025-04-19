interface StateDefinition<TState extends string, TEvent extends string> {
  transitions: {
    [K in TEvent]?: {
      target: TState
    }
  }
}

export interface StateMachineDefinition<
  TState extends string,
  TEvent extends string,
> {
  initialState: TState
  states: { [K in TState]: StateDefinition<TState, TEvent> }
}

interface StateMachine<TState extends string, TEvent extends string> {
  value: TState
  transition: (currentState: TState, event: TEvent) => TState | undefined
}

export function createMachine<TState extends string, TEvent extends string>(
  stateMachineDefinition: StateMachineDefinition<TState, TEvent>,
): StateMachine<TState, TEvent> {
  const machine: StateMachine<TState, TEvent> = {
    value: stateMachineDefinition.initialState,
    transition(currentState, event) {
      const currentStateDefinition = stateMachineDefinition.states[
        currentState
      ] as StateDefinition<TState, TEvent>
      if (!currentStateDefinition) return undefined

      const destinationTransition = currentStateDefinition.transitions[event]
      if (!destinationTransition) return undefined

      const destinationState = destinationTransition.target
      const destinationStateDefinition = stateMachineDefinition.states[
        destinationState
      ] as StateDefinition<TState, TEvent>
      if (!destinationStateDefinition) return undefined

      machine.value = destinationState

      return machine.value
    },
  }
  return machine
}
