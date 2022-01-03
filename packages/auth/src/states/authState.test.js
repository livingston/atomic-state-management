import { recoilSnapshot } from 'test-utils';
import authState from './authState';

describe('authState', () => {
  it('should initalize authState', () => {
    const initialSnapshot = recoilSnapshot();

    expect(initialSnapshot.getLoadable(authState).valueOrThrow()).toBe(false);
  });
});