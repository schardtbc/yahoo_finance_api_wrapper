import { optionQuote } from "./OptionQuote";

import { optionChain } from "./OptionChain";

import { quote }  from "./Quote";

export class YahooFinance {
  public static quote = quote;

  public static optionChain = optionChain;

  public static optionQuote = optionQuote;
}
