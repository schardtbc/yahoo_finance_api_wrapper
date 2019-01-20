import { optionQuote } from "./OptionQuote";

import { optionChain } from "./OptionChain";

import { quote }  from "./Quote";

import { IContract, IMarketQuote, IOptionChain, IOptionQuote, IOptions,  IQuote } from "./interfaces"

export class YahooFinance {
  public static quote = quote;

  public static optionChain = optionChain;

  public static optionQuote = optionQuote;
}

export { IMarketQuote as IMarketQuote}
export { IQuote as IQuote }
export { IOptionChain as IOptionChain }
export { IOptionQuote as IOptionQuote }
export { IContract as IContract}
export { IOptions as IOptions}