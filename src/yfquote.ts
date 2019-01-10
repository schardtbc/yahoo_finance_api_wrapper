import axios from "axios";

const baseURL = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=";

export const reshapeData = (data: { [k: string]: any }) => {
  const tmp = data["quoteResponse"]["result"];
  return tmp;
};

export const quote = async (symbol: string) => {
  const data = await axios.get(baseURL + symbol).then(res => res.data);
  return reshapeData(data);
};
