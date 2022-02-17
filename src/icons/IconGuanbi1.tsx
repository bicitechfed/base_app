/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconGuanbi1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M756.736 812.032L512 567.296 267.776 811.52c-12.8 12.8-28.672 7.168-45.568-9.728s-23.04-32.768-9.728-45.568L456.704 512 211.968 267.264c-14.848-15.36-6.144-30.208 8.704-45.568 16.896-16.896 30.72-25.6 46.592-10.24L512 456.704l244.736-244.224c14.336-14.336 28.672-7.168 47.104 11.264 15.36 15.36 23.552 28.672 8.192 44.032L567.296 512l244.224 244.224c15.36 15.36 8.704 28.672-8.192 46.08-16.896 17.408-33.792 22.528-46.592 9.728z"
        fill={getIconColor(color, 0, '#999999')}
      />
    </Svg>
  );
};

IconGuanbi1.defaultProps = {
  size: 18,
};

IconGuanbi1 = React.memo ? React.memo(IconGuanbi1) : IconGuanbi1;

export default IconGuanbi1;
