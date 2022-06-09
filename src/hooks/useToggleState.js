import {useState} from 'react';

const useToggleState = (initVal) => {
  const [value, setValue] = useState(initVal);
  const toggle = ()=> {
    setValue(!value);
  }
  return [value, toggle]
}

export default useToggleState;