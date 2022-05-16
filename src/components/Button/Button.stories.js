import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Button } from './Button';

storiesOf('CustomButton', module).add('primary', () => <Button>hello</Button>);
