import {useState, useEffect} from 'react';

export default function useLocalStorageState(key, defaultVal) {
  //make piece of state, based off of value in localStorage (or default)
  const [state, setState] = useState(()=>{
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (err) {
      val = defaultVal;
    }
    return val;
  });

  //use useEffect to update localStorage when state changes
  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state));
  },[key, state]);

  return [state, setState];
}