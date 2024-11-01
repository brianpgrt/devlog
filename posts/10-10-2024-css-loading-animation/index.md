---
title: "CSS Loading Animation"
date: "10.10.2024"
---

I log some loading I often use
\
&nbsp;
\
&nbsp;

-   Loading Spin 1

> index.tsx

```rust
import React from "react";

import s from "./loading_spin.module.css";
import { IconSpinner } from "assets/svgs";

type LoadingSpinProps = {
	size?: number;
};

export const LoadingSpin = ({ size = 32 }: LoadingSpinProps) => {
	return (
		<div className={s.container}>
			<IconSpinner width={size} height={size} />
		</div>
	);
};
```

> loading_spin.module.css

```rust
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	animation: spin 0.8s linear infinite;
}
```
