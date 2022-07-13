import AnkrscanProvider from '@ankr.com/ankr.js';

const provider = new AnkrscanProvider('');

export const getNFTs = async (walletAddress: string) => {
  return provider.getNFTsByOwner({
    walletAddress,
  });
};

export const getAccountBalance = async (walletAddress: string) => {
  return provider.getAccountBalance({
    walletAddress,
    blockchain: ['eth'],
  });
};
