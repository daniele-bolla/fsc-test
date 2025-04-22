# React + TypeScript + Vite

# Install

```
npm install
```

# Run

```
npm run dev
```

# Further improvement and explanation

This task led me to work with Finite State Machines.
I created a helper function to build a simple state machine and combined it with a reusable reducer called `useFSCStateMachine`. This approach makes the logic reusable and easy to improve.

Inside, I use the `useEffect` hook to log state transitions. While a more robust logger could be implemented, this setup demonstrates the separation of side effects and how different, decoupled functionality can be integrated.

I also added and commented on some extra features like `transitionTo` and `canTransition`, which would be helpful for more advanced use cases.

For complex scenarios, this implementation could be replaced with the `XState` library, although that would require adapting the API to XState’s machine creation syntax. I intentionally avoided external libraries to showcase and explore how to work with this pattern from scratch.

Another possible improvement would be adding a context/provider to manage different FSC moodlet groups across the app more easily. I haven’t implemented this yet, but it could be done later on.

I also separated the UI component (`MoodletButton`) for better maintainability. It could be further enhanced by supporting different variants, styles, or sizes in a flexible way.
Noticed that i used sizes from Figma but doubled.

I have just added a simple unit test for the main component. Please let me know if you want tot see more.
