import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Text } from './Text';
import { darkTheme, lightTheme } from 'theme/global-styles';

storiesOf('Text', module)
  .add('light mode paragraph', () => (
    <View style={{ backgroundColor: '#fff' }}>
      <Text theme={lightTheme}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
        nulla pretium, ultrices libero ac, consectetur eros. Nam tristique elit
        sed ipsum mattis tristique. In finibus arcu sed nisl molestie suscipit.
        Nunc et volutpat risus, non auctor ex. Nullam ultrices, lorem sit amet
        pretium lacinia, nunc elit consequat diam, eget dapibus arcu ex eu
        ligula. Nam dictum in neque at iaculis. Cras luctus nunc nec massa
        ornare rhoncus. Quisque suscipit ex nec turpis venenatis dignissim.
        Vivamus dignissim justo ut justo varius lacinia. Morbi gravida elit sed
        metus finibus, sed commodo sapien ullamcorper.
      </Text>
    </View>
  ))
  .add('dark mode paragraph', () => (
    <View style={{ backgroundColor: '#000' }}>
      <Text theme={darkTheme}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
        nulla pretium, ultrices libero ac, consectetur eros. Nam tristique elit
        sed ipsum mattis tristique. In finibus arcu sed nisl molestie suscipit.
        Nunc et volutpat risus, non auctor ex. Nullam ultrices, lorem sit amet
        pretium lacinia, nunc elit consequat diam, eget dapibus arcu ex eu
        ligula. Nam dictum in neque at iaculis. Cras luctus nunc nec massa
        ornare rhoncus. Quisque suscipit ex nec turpis venenatis dignissim.
        Vivamus dignissim justo ut justo varius lacinia. Morbi gravida elit sed
        metus finibus, sed commodo sapien ullamcorper.
      </Text>
    </View>
  ));
