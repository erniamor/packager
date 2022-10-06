import 'mocha';
import { assert } from 'chai';

import npmPackage from '../src/index';

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
});
