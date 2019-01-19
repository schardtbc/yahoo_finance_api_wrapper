import axios from "axios";

const baseURL = "https://query2.finance.yahoo.com/v7/finance/options/";

import { IOptionChain, IOptionChainApi } from "./interfaces"


export const reshapeData = (data: IOptionChainApi): IOptionChain => {
  const tmp = data.optionChain.result[0];
  return tmp;
};

export const optionChain = async (symbol: string, expirationDate: number = 0) => {
  let dateParm: string ="";
  if (expirationDate) {
     dateParm ="?&date=" + expirationDate.toString();
  }
  const data: IOptionChainApi = await axios.get(baseURL + symbol + dateParm).then(res => res.data);
  return reshapeData(data);
};
