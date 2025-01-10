// src/add.test.js
import add from './Add';

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('single number returns the number', () => {
  expect(add('1')).toBe(1);
});

test('two numbers return their sum', () => {
  expect(add('1,5')).toBe(6);
});

test('multiple numbers return their sum', () => {
  expect(add('1,2,3')).toBe(6);
});

test('newlines are treated as commas', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('custom delimiter works', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('negative numbers throw error', () => {
  expect(() => add('1,-2,3')).toThrowError('negative numbers not allowed: -2');
  expect(() => add('//;\n1;-2')).toThrowError('negative numbers not allowed: -2');
});
