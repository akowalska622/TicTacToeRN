import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Text } from './Text';

storiesOf('Text', module).add('example text', () => <Text>hello world</Text>);
