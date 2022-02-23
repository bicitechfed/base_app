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

let IconLoadingBlue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 822.144a310.144 310.144 0 1 0 0-620.288 310.144 310.144 0 0 0 0 620.288zM512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLoadingBlue.defaultProps = {
  size: 18,
};

IconLoadingBlue = React.memo ? React.memo(IconLoadingBlue) : IconLoadingBlue;

export default IconLoadingBlue;
