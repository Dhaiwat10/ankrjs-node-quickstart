import { getAccountBalance, getNFTs } from './utils';

const main = async () => {
  console.log('NFTS =================');
  const nfts = await getNFTs('0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106');
  console.log(nfts);

  console.log('TOKEN BALANCES =================');
  const balances = await getAccountBalance(
    '0x0ED6Cec17F860fb54E21D154b49DAEFd9Ca04106'
  );
  console.log(balances);
};

main();
