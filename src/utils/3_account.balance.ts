import { web3 } from './0_web3.setting';

const address = '0xd9Fad178226C9a1Bc5A220c51b6603e275c784FE';


export const getBalance = async () => {

  const balance = await web3.eth.getBalance(address);

  return balance;
};
