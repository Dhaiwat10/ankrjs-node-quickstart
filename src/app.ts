import { getAccountBalance, getNFTs } from './utils';
const prompts = require('prompts');

const main = async () => {
  const addressToQueryNFTsFor = await prompts({
    type: 'text',
    name: 'address',
    message: 'Enter an address to query NFTs for',
  });
  console.log('NFTS =================');
  const nfts = await getNFTs(addressToQueryNFTsFor.address);
  console.log(nfts);

  const addressToQueryBalancesFor = await prompts({
    type: 'text',
    name: 'address',
    message: 'Enter an address to query token balances for',
  });
  console.log('TOKEN BALANCES =================');
  const balances = await getAccountBalance(addressToQueryBalancesFor.address);
  console.log(balances);
};

main();
