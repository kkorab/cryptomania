import btcLogo from 'assets/svgs/bitcoin-logo.svg';
import ethereumLogo from 'assets/svgs/ethereum.svg';
import litecoinLogo from 'assets/svgs/litecoin.svg';

const data = {
  wallets: [
    {
      currency: 'BTC',
      fullName: 'Bitcoin',
      ownedValue: 3.746,
      price: 33577.8,
      colors: ['rgba(253, 143, 164, 0.85)', 'rgba(255, 198, 106, 0.95)'],
      logo: btcLogo,
    },
    {
      currency: 'ETH',
      fullName: 'Ethereum',
      ownedValue: 542.32,
      price: 1354.1,
      colors: ['rgba(135, 84, 255, 0.85)', 'rgba(23, 182, 239, 0.95)'],
      logo: ethereumLogo,
    },
    {
      currency: 'LTC',
      fullName: 'Litecoin',
      ownedValue: 317.0,
      price: 131.41,
      colors: ['rgba(35,226,214, 0.85)', 'rgba(63, 154, 247, 0.95)'],
      logo: litecoinLogo,
    },
  ],
};

export default data;
