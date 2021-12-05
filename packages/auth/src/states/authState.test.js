import { snapshot } from 'test-utils';
import authState from './authState';

describe('authState', () => {
  it('should initalize authState', () => {
    const initialSnapshot = snapshot();

    expect(initialSnapshot.getLoadable(authState).valueOrThrow()).toBe(false);
  });
});