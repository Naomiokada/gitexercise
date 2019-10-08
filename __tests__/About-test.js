/**
 * @format
 */

import 'react-native';
import React from 'react';
import About from '../comps/About';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders About correctly', () => {
  renderer.create(<About />);
});
