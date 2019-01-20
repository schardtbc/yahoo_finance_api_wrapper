
export interface IQuote {
    language: string;
    region: string;
    quoteType: string;
    quoteSourceName: string;
    currency: string;
    shortName: string;
    sharesOutstanding: number;
    bookValue: number;
    fiftyDayAverage: number;
    fiftyDayAverageChange: number;
    fiftyDayAverageChangePercent: number;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    marketCap: number;
    forwardPE: number;
    priceToBook: number;
    sourceInterval: number;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    priceHint: number;
    esgPopulated: boolean;
    tradeable: boolean;
    regularMarketPrice: number;
    regularMarketTime: number;
    regularMarketChange: number;
    regularMarketOpen: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    exchange: string;
    marketState: string;
    epsForward: number;
    market: string;
    postMarketChangePercent: number;
    postMarketTime: number;
    postMarketPrice: number;
    postMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketDayRange: string;
    regularMarketPreviousClose: number;
    bid: number;
    ask: number;
    bidSize: number;
    askSize: number;
    messageBoardId: string;
    fullExchangeName: string;
    longName: string;
    financialCurrency: string;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    dividendDate: number;
    earningsTimestamp: number;
    earningsTimestampStart: number;
    earningsTimestampEnd: number;
    trailingAnnualDividendRate: number;
    trailingPE: number;
    trailingAnnualDividendYield: number;
    epsTrailingTwelveMonths: number;
    exchangeDataDelayedBy: number;
    symbol: string
}


export interface IOptionQuote {
    language: string;
    region: string;
    quoteType: string;
    currency: string;
    regularMarketChangePercent: number;
    regularMarketDayRange: string;
    regularMarketPreviousClose: number;
    bid: number;
    ask: number;
    fullExchangeName: string;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    sourceInterval: number;
    exchangeTimezoneName: string ;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    esgPopulated: boolean;
    tradeable: boolean;
    exchangeDataDelayedBy: number;
    market: string;
    regularMarketPrice: number;
    regularMarketTime: number;
    regularMarketChange: number;
    regularMarketOpen: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    marketState: string;
    exchange: string;
    priceHint: number;
    underlyingSymbol: string;
    strike: number;
    openInterest: number;
    expireDate: number;
    expireIsoDate: string;
    shortName: string;
    symbol: string;
}


export interface IContract {
    contractSymbol: string;
    strike: number;
    currency: string;
    lastPrice: number;
    change: number;
    percentChange: number;
    volume: number;
    openInterest: number;
    bid: number;
    ask: number;
    contractSize: string;
    expiration: number;
    lastTradeDate: number;
    impliedVolatility: number;
    inTheMoney: boolean
}


export interface IOptions {
    expirationDate: number;
    hasMiniOptions: boolean; 
    calls: [IContract]
    puts: [IContract]
  }

export interface IOptionChain {
  underlyingSymbol: string;
  expirationDates: number[];
  strikes: number[];
  hasMiniOptions: boolean;
  quote: IQuote
  options: [IOptions]
};

export interface IOptionQuoteResult {
  underlyingSymbol: string;
  expirationDates: number[];
  strikes: number[];
  hasMiniOptions: boolean;
  quote: IOptionQuote;
  options: any
}

export interface IOptionChainApi {
    optionChain:  {result: IOptionChain[]}
    error: any
}

export interface IQuoteApi {
    quoteResponse:  { result: IQuote[]};
    error: any
}

export interface IOptionQuoteApi {
  optionChain: {result: IOptionQuoteResult[]  }
  error : any
}

