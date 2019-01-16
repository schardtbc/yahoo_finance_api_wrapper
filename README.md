yahoo_finance_api_wrapper

[![CircleCI](https://circleci.com/gh/schardtbc/yahoo_finance_api_wrapper.svg?style=svg)](https://circleci.com/gh/schardtbc/yahoo_finance_api_wrapper)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

There is no official documentation for the current Yahoo Finance Api. This
wrapper was developed based on hints (google search) and testing what works.

# Installation

npm install --save git+https://git@github.com/schardtbc/yahoo_finance_api_wrapper.git

```javascript
# in your code file

import { YahooFinance } from "yahoo_finance_api_wrapper"
...
```

# Interface declaration


```javascript
export declare class YahooFinance {
    static quote: (symbol: string) => Promise<any>;
    static optionChain: (symbol: string) => Promise<any>;
    static optionQuote: (symbol: string) => Promise<any>;
}
