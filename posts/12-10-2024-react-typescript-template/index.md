---
title: "React Typescript Template"
date: "12.10.2024"
---

[MDX](https://mdxjs.com "title")

\
&nbsp;
\
&nbsp;

```tsx
import React from "react";
import { omitBy } from "lodash";

type FlexContainerProps = {
	display?: "flex" | "inline-flex";
	direction?: React.CSSProperties["flexDirection"];
	wrap?: React.CSSProperties["flexWrap"];
	flow?: React.CSSProperties["flexFlow"];
	justifyContent?: React.CSSProperties["justifyContent"];
	alignItems?: React.CSSProperties["alignItems"];
	alignContent?: React.CSSProperties["alignContent"];
	gap?: React.CSSProperties["gap"];
	rowGap?: React.CSSProperties["rowGap"];
	columnGap?: React.CSSProperties["columnGap"];
	style?: React.CSSProperties;
	children: React.ReactNode;
};

type FlexItemProps = {
	order?: React.CSSProperties["order"];
	grow?: React.CSSProperties["flexGrow"];
	shrink?: React.CSSProperties["flexShrink"];
	basis?: React.CSSProperties["flexBasis"];
	flex?: React.CSSProperties["flex"];
	self?: React.CSSProperties["alignSelf"];
	children: React.ReactNode;
};

export function FlexContainer({
	display = "flex",
	direction,
	wrap,
	flow,
	justifyContent,
	alignItems,
	alignContent,
	gap,
	rowGap,
	columnGap,
	style = {},
	children,
}: FlexContainerProps) {
	const inline = {
		display,
		flexDirection: direction,
		flexWrap: wrap,
		flexFlow: flow,
		justifyContent,
		alignItems,
		alignContent,
		gap,
		rowGap,
		columnGap,
	};

	const omitStyle = omitBy(inline, (s) => !s);

	return <div style={{ ...omitStyle, ...style }}>{children}</div>;
}

export function FlexItem({ order, grow, shrink, basis, flex, self, children }: FlexItemProps) {
	const inline = {
		order,
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
		flex,
		alignSelf: self,
	};

	const omitStyle = omitBy(inline, (s) => !s);

	return <div style={omitStyle}>{children}</div>;
}
```

\
\
\

## 1. decimals and a dot for ordered items
