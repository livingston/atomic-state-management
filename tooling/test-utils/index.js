import { useEffect } from 'react';
import { snapshot_UNSTABLE, useRecoilValue } from 'recoil';
import type { RecoilValue } from 'recoil';

export const snapshot = snapshot_UNSTABLE;

interface RecoilObserverProps {
  node: RecoilValue<any>,
  onChange: Function,
}

export const RecoilObserver = ({node , onChange}:RecoilObserverProps) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};