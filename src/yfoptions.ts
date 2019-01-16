import axios from "axios";

const baseURL = "https://query2.finance.yahoo.com/v7/finance/options/";

export const reshapeData = (data: { [k: string]: any }) => {
  const tmp = data["optionChain"]["result"];
  return tmp;
};

export const optionChain = async (symbol: string) => {
  const data = await axios.get(baseURL + symbol).then(res => res.data);
  return reshapeData(data);
};
