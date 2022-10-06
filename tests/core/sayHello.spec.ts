import 'mocha';
import { assert } from 'chai';

import { sayHello } from '../../src/core/sayHello';
import SCENARIOS from './sayHello.scenarios'

describe('sayHello Function', () => {
  it('should be a function', () => {
    assert.isFunction(sayHello);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${scenario.output}" for name "${scenario.input.name}"`, () => {
      const expected = scenario.output;
      const actual = sayHello(scenario.input.name);
      assert.equal(actual, expected);
    });
  }
});
