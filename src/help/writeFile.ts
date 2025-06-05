import fs from 'fs';
import path from 'path';

const basePath = __dirname;
const writeFilePath = path.join(basePath, '../../account', 'account.json');

type Account = {
  chainId: string;
  address: string;  
  balance: string;
};

export const writeFile = async (data: Account) => {
  const { chainId, address, balance } = data;
  const accountData = `{
    "chainId": "${chainId}",
    "address": "${address}",
    "balance": "${balance}"
  }`;

  fs.writeFile(writeFilePath, accountData, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
};
