import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchCurrencyAction } from '../../redux/thunk/currency';

export default function() {
  const dispatch = useDispatch();
  const getDelayTime = (min: number, max: number) => {
    const random = Math.random() * (max - min)  + min;
    return Math.floor(random) * 1000;
  }

  useEffect(() => {
    let timeoutId: number;
    const fectchData = () => {
      dispatch(fetchCurrencyAction());
      const delayTime: number = getDelayTime(10, 60);
      timeoutId = setTimeout(() => fectchData(), delayTime);
    }
    fectchData();
    return () => {
      timeoutId && clearTimeout(timeoutId);
    }
  }, [dispatch]);
} 