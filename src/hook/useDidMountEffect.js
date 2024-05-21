import { useEffect, useRef } from 'react';

/*
* useEffect 첫 렌더링 막기
* */

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;