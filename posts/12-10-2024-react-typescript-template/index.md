---
title: "React Typescript Template"
date: "12.10.2024"
---

[MDX](https://mdxjs.com "title")

\
&nbsp;
\
&nbsp;
\
&nbsp;

![Alt text](https://raw.githubusercontent.com/haorocks/devlog/main/posts/12-10-2024-react-typescript-template/airbnb.jpeg "title")

\
&nbsp;
\
&nbsp;
\
&nbsp;

```rust
type ParseResult<T> = Result<T, ParseError>;
 
impl<'a> Parser<'a> {
    /* amount = INTEGER ; */
    fn parse_amount(&mut self) -> ParseResult<i32> {
        ...
    }
 
    /* 	currency_symbol = '$' | '£' | '€' ; */
    fn parse_currency_symbol(&mut self) -> ParseResult<Currency> {
        ...
    }
 
    /* money = currency_symbol amount ; */
    fn parse_money(&mut self) -> ParseResult<MoneyNode> {
        let currency = self.parse_currency_symbol()?;
        let amount = self.parse_amount()?;
        return Ok(MoneyNode { currency, amount });
    }
}
```
\
&nbsp;
\
&nbsp;
\
&nbsp;

## * Variable with a value from other variables
