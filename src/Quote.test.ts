/**
 * @jest-environment node
 */

import { quote } from "./Quote";

test("quote()", async () => {
  const tmp = await quote("AAPL");
  expect(tmp).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        language: expect.any(String),
        region: expect.any(String),
        quoteType: expect.any(String),
        quoteSourceName: expect.any(String),
        currency: expect.any(String),
        shortName: expect.any(String),
        sharesOutstanding: expect.any(Number),
        bookValue: expect.any(Number),
        fiftyDayAverage: expect.any(Number),
        fiftyDayAverageChange: expect.any(Number),
        fiftyDayAverageChangePercent: expect.any(Number),
        twoHundredDayAverage: expect.any(Number),
        twoHundredDayAverageChange: expect.any(Number),
        twoHundredDayAverageChangePercent: expect.any(Number),
        marketCap: expect.any(Number),
        forwardPE: expect.any(Number),
        priceToBook: expect.any(Number),
        sourceInterval: expect.any(Number),
        exchangeTimezoneName: expect.any(String),
        exchangeTimezoneShortName: expect.any(String),
        gmtOffSetMilliseconds: expect.any(Number),
        priceHint: expect.any(Number),
        esgPopulated: expect.any(Boolean),
        tradeable: expect.any(Boolean),
        regularMarketPrice: expect.any(Number),
        regularMarketTime: expect.any(Number),
        regularMarketChange: expect.any(Number),
        regularMarketOpen: expect.any(Number),
        regularMarketDayHigh: expect.any(Number),
        regularMarketDayLow: expect.any(Number),
        regularMarketVolume: expect.any(Number),
        exchange: expect.any(String),
        marketState: expect.any(String),
        epsForward: expect.any(Number),
        market: expect.any(String),
        postMarketChangePercent: expect.any(Number),
        postMarketTime: expect.any(Number),
        postMarketPrice: expect.any(Number),
        postMarketChange: expect.any(Number),
        regularMarketChangePercent: expect.any(Number),
        regularMarketDayRange: expect.any(String),
        regularMarketPreviousClose: expect.any(Number),
        bid: expect.any(Number),
        ask: expect.any(Number),
        bidSize: expect.any(Number),
        askSize: expect.any(Number),
        messageBoardId: expect.any(String),
        fullExchangeName: expect.any(String),
        longName: expect.any(String),
        financialCurrency: expect.any(String),
        averageDailyVolume3Month: expect.any(Number),
        averageDailyVolume10Day: expect.any(Number),
        fiftyTwoWeekLowChange: expect.any(Number),
        fiftyTwoWeekLowChangePercent: expect.any(Number),
        fiftyTwoWeekRange: expect.any(String),
        fiftyTwoWeekHighChange: expect.any(Number),
        fiftyTwoWeekHighChangePercent: expect.any(Number),
        fiftyTwoWeekLow: expect.any(Number),
        fiftyTwoWeekHigh: expect.any(Number),
        dividendDate: expect.any(Number),
        earningsTimestamp: expect.any(Number),
        earningsTimestampStart: expect.any(Number),
        earningsTimestampEnd: expect.any(Number),
        trailingAnnualDividendRate: expect.any(Number),
        trailingPE: expect.any(Number),
        trailingAnnualDividendYield: expect.any(Number),
        epsTrailingTwelveMonths: expect.any(Number),
        exchangeDataDelayedBy: expect.any(Number),
        symbol: expect.any(String)
      })
    ])
  );
});
