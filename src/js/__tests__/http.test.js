import { httpGet } from "../http";
import { httpPost } from "../http";

test('httpGet', () => {
  expect(() => httpGet('urltest')).toThrowError('urltest');
})

test('httpPost', () => {
  expect(() => httpPost('urltest')).toThrowError('urltest');
})