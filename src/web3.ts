import { getChainId } from './utils/1_chain.info';
import { getBalance } from './utils/3_account.balance';
import { fromWei } from './utils/4_convert.balance';
import { writeFile } from './help/writeFile';

const execute = async () => {
  try {
    const chainId = (await getChainId()).toString();
    const balance = await getBalance();
    const convertBalance = fromWei(balance);

    await writeFile({
      chainId: chainId,
      address: '0xd9Fad178226C9a1Bc5A220c51b6603e275c784FE',
      balance: convertBalance,
    });
  } catch (err) {
    console.error(err);
  }
};

execute();
