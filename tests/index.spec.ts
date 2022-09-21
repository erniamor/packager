import 'mocha';
import { assert } from 'chai';

import { sayHello } from '../src/index';
import npmPackage from '../src/index';

import SCENARIOS from './index.scenarios'

describe('Packager', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a sayHello property', () => {
    assert.property(npmPackage, 'sayHello');
  });
});

describe('sayHello Function', () => {
  it('should be a function', () => {
    assert.isFunction(sayHello);
  });
  for (let index = 0; index < SCENARIOS.length; index++) {
    const scenario = SCENARIOS[index];
    it(`should return "${scenario.output}" with "${scenario.input.name}" name`, () => {
      const expected = scenario.output;
      const actual = sayHello(scenario.input.name);
      assert.equal(actual, expected);
    });
  }
});
