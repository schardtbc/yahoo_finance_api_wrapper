import axios from "axios";

const baseURL = "https://query2.finance.yahoo.com/v7/finance/options/";

interface IOptionResults {
  optionChain: {result: object}
}

export const reshapeData = (data: IOptionResults) => {
  const tmp = data.optionChain.result;
  return tmp;
};

export const optionChain = async (symbol: string, expirationDate: number = 0) => {
  let dateParm: string ="";
  if (expirationDate) {
     dateParm ="?&date=" + expirationDate.toString();
  }
  const data = await axios.get(baseURL + symbol + dateParm).then(res => res.data);
  return reshapeData(data);
};
