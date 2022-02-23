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

let IconEllipsis: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 576a64 64 0 1 1 0-128 64 64 0 0 1 0 128zM448 512a64 64 0 1 0 128 0 64 64 0 0 0-128 0zM768 512a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconEllipsis.defaultProps = {
  size: 18,
};

IconEllipsis = React.memo ? React.memo(IconEllipsis) : IconEllipsis;

export default IconEllipsis;
