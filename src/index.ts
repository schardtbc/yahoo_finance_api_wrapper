import { optionQuote } from "./OptionQuote";

import { optionChain } from "./OptionChain";

import { quote }  from "./Quote";

import { IOptionChain, IOptionQuote, IQuote } from "./interfaces"

export class YahooFinance {
  public static quote = quote;

  public static optionChain = optionChain;

  public static optionQuote = optionQuote;
}

export { IQuote as IQuote }
export { IOptionChain as IOptionChanin }
export { IOptionQuote as IOptionQuote }