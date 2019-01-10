import * as yfo from "./yfoptions";
import * as yfq from "./yfquote";

export class YahooFinance {
  public static quote = yfq.quote;

  public static options = yfo.options;
}
