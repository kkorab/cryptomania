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
  const day = addZero(Math.floor(Math.random() * 28 + 1));
  const month = addZero(newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  const hours = addZero(newDate.getHours());
  const minutes = addZero(newDate.getMinutes());
  const seconds = addZero(newDate.getSeconds());
  const fullDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;

  return fullDate;
};

export const currencies = [
  {
    currency: 'BTC',
    fullName: 'Bitcoin',
    colors: ['rgba(253, 143, 164, 0.85)', 'rgba(255, 198, 106, 0.95)'],
    price: 33577.8,
    logo: btcLogo,
  },
  {
    currency: 'ETH',
    fullName: 'Ethereum',
    colors: ['rgba(135, 84, 255, 0.85)', 'rgba(23, 182, 239, 0.95)'],
    price: 1354.1,
    logo: ethereumLogo,
  },
  {
    currency: 'LTC',
    fullName: 'Litecoin',
    colors: ['rgba(35,226,214, 0.85)', 'rgba(63, 154, 247, 0.95)'],
    price: 131.41,
    logo: litecoinLogo,
  },
];

const data = {
  wallets: [
    {
      currency: 'BTC',
      ownedValue: 3.746,
    },
    {
      currency: 'ETH',
      ownedValue: 542.32,
    },
    {
      currency: 'LTC',
      ownedValue: 317.0,
    },
  ],
  transactions: [
    {
      currency: 'BTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'ETH',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'ETH',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'LTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'BTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'LTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'BTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'ETH',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
    {
      currency: 'BTC',
      date: DateGenerator(),
      transactionID: uuidv4(),
      transactionValue: Number(Math.random().toFixed(2)),
    },
  ],
  activities: [
    {
      id: 1,
      type: 'subscription',
      content: 'Paid at NSUS Limited',
      date: 'January 14, 2021 7:51 PM',
      value: 117,
      currency: 'USD',
    },
    {
      id: 2,
      type: 'deposit',
      content: 'Deposit with Trustly',
      date: 'January 7, 2021 10:51 PM',
      value: 240,
      currency: 'USD',
    },
    {
      id: 3,
      type: 'fee',
      content: 'Fee for a new card',
      date: 'December 20, 2020 4:20 PM',
      value: 12,
      currency: 'USD',
    },
    {
      id: 4,
      type: 'deposit',
      content: 'Deposit with Trustly',
      date: 'December 8, 2021 10:51 PM',
      value: 170,
      currency: 'USD',
    },
    {
      id: 5,
      type: 'fee',
      content: 'Fee for a new card',
      date: 'November 20, 2020 4:20 PM',
      value: 12,
      currency: 'USD',
    },
  ],
};

export default data;
