import React from 'react';
import { render } from 'react-dom';
import Button from '../packages/Button';

describe('ts测试', function () {
  test('hello', function () {
    const a = 1 + 5;
    expect(a).toBe(6);
  });
});
