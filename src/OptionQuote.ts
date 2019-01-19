import axios from "axios";

import { IOptionQuoteApi } from "./interfaces"

const baseURL = "https://query1.finance.yahoo.com/v7/finance/options/";

export const reshapeData = (data: IOptionQuoteApi) => {
  const tmp = data.optionChain.result[0].quote;
  return tmp;
};

export const optionQuote = async (symbol: string) => {
  const data: IOptionQuoteApi = await axios.get(baseURL + symbol).then(res => res.data);
  return reshapeData(data);
};