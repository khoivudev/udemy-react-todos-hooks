import {useReducer, useEffect} from 'react';

export default function useLocalStorageReducer(key, defaultVal, reducer) {
  //make piece of state, based off of value in localStorage (or default)
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch (err) {
      value = defaultVal;
    }
    return value;
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  },[state, key])
  
  return [state, dispatch];
}