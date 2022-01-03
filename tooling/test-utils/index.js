import { useEffect } from 'react';
import { snapshot_UNSTABLE, useRecoilValue } from 'recoil';

export const recoilSnapshot = snapshot_UNSTABLE;


export const RecoilObserver = ({node , onChange}) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);

  return null;
};