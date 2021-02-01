import { v4 as uuidv4 } from 'uuid';
import btcLogo from 'assets/svgs/bitcoin-logo.svg';
import ethereumLogo from 'assets/svgs/ethereum.svg';
import litecoinLogo from 'assets/svgs/litecoin.svg';

const addZero = number => {
  const fixedNumber = number < 10 ? `0${number}` : number;
  return fixedNumber;
};

const DateGenerator = () => {
  const newDate = new Date();
  const day = addZero(newDate.getDate());
  const month = addZero(newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  const hours = addZero(newDate.getHours());
  const minutes = addZero(newDate.getMinutes());
  const seconds = addZero(newDate.getSeconds());
  const fullDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;

  return fullDate;
};

const currencies = {
  BTC: {
    colors: ['rgba(253, 143, 164, 0.85)', 'rgba(255, 198, 106, 0.95)'],
    price: 33577.8,
    logo: btcLogo,
  },
  ETH: {
    colors: ['rgba(135, 84, 255, 0.85)', 'rgba(23, 182, 239, 0.95)'],
    price: 1354.1,
    logo: ethereumLogo,
  },
  LTC: {
    colors: ['rgba(35,226,214, 0.85)', 'rgba(63, 154, 247, 0.95)'],
    price: 131.41,
    logo: litecoinLogo,
  },
};

const data = {
  wallets: [
    {
      currency: 'BTC',
      fullName: 'Bitcoin',
      ownedValue: 3.746,
      price: currencies.BTC.price,
      colors: currencies.BTC.colors,
      logo: btcLogo,
    },
    {
      currency: 'ETH',
      fullName: 'Ethereum',
      ownedValue: 542.32,
      price: currencies.ETH.price,
      colors: currencies.ETH.colors,
      logo: ethereumLogo,
    },
    {
      currency: 'LTC',
      fullName: 'Litecoin',
      ownedValue: 317.0,
      price: currencies.LTC.price,
      colors: currencies.LTC.colors,
      logo: litecoinLogo,
    },
  ],
  transactions: [
    {
      currency: 'BTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Math.random().toFixed(2),
    },
  ],
};

export default data;
