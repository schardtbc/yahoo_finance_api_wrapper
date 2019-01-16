import * as yfoq from "./yfoptionQuote";
import * as yfoc from "./yfoptions";
import * as yfq from "./yfquote";

export class YahooFinance {
  public static quote = yfq.quote;

  public static optionChain = yfoc.optionChain;

  public static optionQuote = yfoq.optionQuote;
}
