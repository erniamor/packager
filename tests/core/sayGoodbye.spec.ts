import 'mocha';
import { assert } from 'chai';

import { sayGoodbye } from '../../src/core/sayGoodbye';
import SCENARIOS from './sayGoodbye.scenarios'

describe('sayGoodbye Function', () => {
  it('should be a function', () => {
    assert.isFunction(sayGoodbye);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${scenario.output}" for name "${scenario.input.name}"`, () => {
      const expected = scenario.output;
      const actual = sayGoodbye(scenario.input.name);
      assert.equal(actual, expected);
    });
  }
});
