import 'mocha';
import { assert } from 'chai';

import npmPackage from '../src/index';
import { sayHello, sayGoodbye } from '../src/index';

describe('Packager', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });
  it('should have a sayHello property', () => {
    assert.property(npmPackage, 'sayHello');
  });
  it('should have a sayGoodbye property', () => {
    assert.property(npmPackage, 'sayGoodbye');
  });

  describe('sayHello', () => {
    it('should be a function', () => {
      assert.isFunction(sayHello);
    });
  });
  describe('sayGoodbye', () => {
    it('should be a function', () => {
      assert.isFunction(sayGoodbye);
    });
  });

});
