import React from 'react';
import styled from 'styled-components';

export const Text = ({ children, theme, ...restOfProps }) => {
  return <StyledText {...restOfProps}>{children}</StyledText>;
};

const StyledText = styled.Text`
  color: ${props => props.theme.text};
`;
