import { reverseString } from '../core/reverseString.js';

test('reverses a standard string', () => {
  expect(reverseString('AI4Devs')).toBe('sveD4IA');
});

test('reverses an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('throws error for non-string input', () => {
  expect(() => reverseString(123)).toThrow('Input must be a string');
});

test('reverses string with special characters', () => {
  expect(reverseString('!@#')).toBe('#@!');
});

test('reverses string with spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});