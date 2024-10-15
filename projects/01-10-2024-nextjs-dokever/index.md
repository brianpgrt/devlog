---
title: "NextJs Dokever"
date: "01.10.2024"
---

In React, a "hook" is a special function that allows you to "hook into" React state and lifecycle features from functional components. Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component.

# NextJs Dokever

1. `useState`: Allows you to declare a state variable in a functional component.
2. `useEffect`: Allows you to perform side effects, such as data fetching or subscriptions, in a functional component.
3. `useContext`: Allows you to consume the value of a React context in a functional component.
4. `useReducer`: Allows you to manage complex state logic in a functional component.
5. `useRef`: Allows you to create and access refs in a functional component.

Here's an example of how you might use the `useState` hook in a React component:

```jsx
import React, { useState } from "react";

function MyComponent() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}
```

In this example, the `useState` hook is used to declare a state variable called `count`. The `useState` hook returns an array with two elements: the current state value and a function to update the state. The `count` variable represents the current state value, and the `setCount` function is used to update the state. When the button is clicked, the `setCount` function is called with the new state value, causing the component to re-render with the updated count. This example demonstrates how hooks can be used to manage state in functional components.
