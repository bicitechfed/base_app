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

let IconClose: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 585.6L758.4 832 832 758.4 585.6 512 832 265.6 758.4 192 512 438.4 265.6 192 192 265.6 438.4 512 192 758.4 265.6 832z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconClose.defaultProps = {
  size: 18,
};

IconClose = React.memo ? React.memo(IconClose) : IconClose;

export default IconClose;
