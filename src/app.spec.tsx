import { Home } from '@/pages';
import { render, screen } from '@testing-library/react';

it('Test', () => {
  render(<Home />);

  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
});
