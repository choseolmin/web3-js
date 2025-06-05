import { web3 } from './0_web3.setting';

const senderPrivateKey = '0xa09a9d205abb5072d4f2449b53c31c39ad44d8ed77caf8cd96282bc29b4c272f'; 
const senderAddress = '0xd9Fad178226C9a1Bc5A220c51b6603e275c784FE';
const receiverAddress = '0x21f4Fe147de28a59c5d9d55F1F663a240dcA2657';

export const sendTransaction = async (toAddress: string, amountInEther: string) => {
  const nonce = await web3.eth.getTransactionCount(senderAddress, 'latest');

  // 수수료(gas) 세팅 추가
  const maxPriorityFeePerGas = web3.utils.toWei('2', 'gwei'); 
  const maxFeePerGas = web3.utils.toWei('50', 'gwei');        

  const tx = {
    from: senderAddress,
    to: toAddress,
    value: web3.utils.toWei(amountInEther, 'ether'),
    gas: 21000,
    nonce: nonce,
    maxPriorityFeePerGas: maxPriorityFeePerGas,
    maxFeePerGas: maxFeePerGas,
    type: 2, 
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);

  console.log('Transaction successful with hash:', receipt.transactionHash);
};


const run = async () => {
  try {
    await sendTransaction(receiverAddress, '0.01'); 
  } catch (error) {
    console.error('Transaction failed:', error);
  }
};

run();
