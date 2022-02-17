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

let IconA176Shuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M949.333333 512c0 241.536-195.797333 437.333333-437.333333 437.333333a436.821333 436.821333 0 0 1-357.482667-185.344l-56.746666 44.224a8.533333 8.533333 0 0 1-13.76-6.741333v-174.933333a8.533333 8.533333 0 0 1 10.602666-8.277334l170.005334 42.453334a8.533333 8.533333 0 0 1 3.178666 15.018666l-62.72 48.853334A372.864 372.864 0 0 0 512 885.333333c203.84 0 369.536-163.370667 373.269333-366.314666L885.333333 512h64zM512 74.666667a436.842667 436.842667 0 0 1 359.146667 187.733333l58.026666-45.226667a8.533333 8.533333 0 0 1 13.781334 6.741334v174.933333a8.533333 8.533333 0 0 1-10.602667 8.277333l-170.026667-42.453333a8.533333 8.533333 0 0 1-3.178666-15.018667l61.44-47.850666A372.885333 372.885333 0 0 0 512 138.666667c-203.84 0-369.536 163.370667-373.269333 366.314666L138.666667 512h-64C74.666667 270.464 270.464 74.666667 512 74.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconA176Shuaxin.defaultProps = {
  size: 18,
};

IconA176Shuaxin = React.memo ? React.memo(IconA176Shuaxin) : IconA176Shuaxin;

export default IconA176Shuaxin;
