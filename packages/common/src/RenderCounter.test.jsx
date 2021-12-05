import { render } from '@testing-library/react';
import RenderCounter from './RenderCounter';

describe('RenderCounter', () => {
  it('should render the component', () => {
    const { container } = render(<RenderCounter />);

    expect(container.textContent).toBe('1');
    expect(container).toMatchSnapshot();
  });

  it('should increment the count on each render', () => {
    const { container, rerender } = render(<RenderCounter />);

    expect(container.textContent).toBe('1');

    rerender(<RenderCounter />);
    expect(container.textContent).toBe('2');

    rerender(<RenderCounter />);
    expect(container.textContent).toBe('3');
  });
});
