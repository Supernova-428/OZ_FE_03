import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(0)
});

test('minus button has corrext text', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('minus-button')
  expect(buttonElement).toHaveTextContent('-')
})

test('plus button has corrext text', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('plus-button')
  expect(buttonElement).toHaveTextContent('+')
})

test('when the + button is pressed, the counter changes to 1', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('plus-button')
  fireEvent.click(buttonElement)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(1)
})

test('on/off button has blue color', () => {
  render(<App />)
  const buttonElement = screen.getByTestId('on/off-button')
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})
})