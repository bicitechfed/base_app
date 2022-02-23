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

let IconMore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zM512 576a64 64 0 1 0 0-128 64 64 0 0 0 0 128zM576 832a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMore.defaultProps = {
  size: 18,
};

IconMore = React.memo ? React.memo(IconMore) : IconMore;

export default IconMore;
