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

let IconMinusCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896z m224-416h-448v-64h448v64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMinusCircleFilled.defaultProps = {
  size: 18,
};

IconMinusCircleFilled = React.memo ? React.memo(IconMinusCircleFilled) : IconMinusCircleFilled;

export default IconMinusCircleFilled;
