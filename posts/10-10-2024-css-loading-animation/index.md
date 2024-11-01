---
title: "CSS Loading Animation"
date: "10.10.2024"
---

I log some loading I often use

### 1. Loading Spin 1

index.tsx

```tsx
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

loading_spin.module.css

```css
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

```rust
const sizeStr = "1000";
const fileSize: u64 = try std.fmt.parseInt(u64, sizeStr, 10);
```

```rust
pub fn charCode(c: u8) usize {
    if (c >= 97 and c <= 122) {
        return c - 'a';
    } else {
        return c - 'A' + 26;
    }
}

pub fn codeToChar(code: usize) u8 {
    if (code < 26) {
        return 'a' + @intCast(u8, code);
    } else {
        return 'A' + @intCast(u8, code) - 26;
    }
}
```
