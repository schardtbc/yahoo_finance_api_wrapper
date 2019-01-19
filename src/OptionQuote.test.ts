/**
 * @jest-environment node
 */

import { optionQuote } from "./OptionQuote";


test("optionQuote()", async () => {
    const tmp = await optionQuote("AAPL190125C00150000");
    expect(tmp).toEqual(
        expect.objectContaining({
          language: expect.any(String),
          region: expect.any(String),
          quoteType: expect.any(String),
          currency: expect.any(String),
          market: expect.any(String),
          esgPopulated: expect.any(Boolean),
          tradeable: expect.any(Boolean),
          exchangeDataDelayedBy: expect.any(Number),
          regularMarketChangePercent: expect.any(Number),
          regularMarketPreviousClose: expect.any(Number),
          bid: expect.any(Number),
          ask: expect.any(Number),
          fullExchangeName: expect.any(String),
          fiftyTwoWeekLowChange: expect.any(Number),
          fiftyTwoWeekLowChangePercent: expect.any(Number),
          fiftyTwoWeekRange: expect.any(String),
          fiftyTwoWeekHighChange: expect.any(Number),
          fiftyTwoWeekHighChangePercent: expect.any(Number),
          fiftyTwoWeekLow: expect.any(Number),
          fiftyTwoWeekHigh: expect.any(Number),
          strike: expect.any(Number),
          underlyingSymbol: expect.any(String),
          openInterest: expect.any(Number),
          expireDate: expect.any(Number),
          expireIsoDate: expect.any(String),
          sourceInterval: expect.any(Number),
          exchangeTimezoneName: expect.any(String),
          exchangeTimezoneShortName: expect.any(String),
          gmtOffSetMilliseconds: expect.any(Number),
          shortName: expect.any(String),
          priceHint: expect.any(Number),
          regularMarketPrice: expect.any(Number),
          regularMarketTime: expect.any(Number),
          regularMarketChange: expect.any(Number),
          regularMarketOpen: expect.any(Number),
          regularMarketDayHigh: expect.any(Number),
          regularMarketDayLow: expect.any(Number),
          regularMarketVolume: expect.any(Number),
          marketState: expect.any(String),
          exchange: expect.any(String),
          regularMarketDayRange: expect.any(String),
          symbol: expect.any(String),
        })
    );
  });