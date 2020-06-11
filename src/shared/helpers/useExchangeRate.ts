import { useState, useEffect } from 'react';


export default function(btcAmount: number, exchangeRate: number = 0) {
  const [amount, setAmount] = useState(0);

  const calculate = () => {
      const rate = exchangeRate;
      const result = Number((rate * btcAmount).toFixed());
      setAmount(result);
  }
  
  useEffect(calculate, [exchangeRate, btcAmount])

  return {
    amount,
  }
}