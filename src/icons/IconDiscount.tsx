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

let IconDiscount: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M501.696 320.64A128 128 0 1 1 320.64 501.76 128 128 0 0 1 501.76 320.64z m-45.248 45.248a64 64 0 1 0-90.496 90.56 64 64 0 0 0 90.496-90.56z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 508.8V128h380.8a64 64 0 0 1 45.248 18.752l392.512 392.512a64 64 0 0 1 0 90.56l-316.8 316.8a64 64 0 0 1-90.496 0L146.752 553.984A64 64 0 0 1 128 508.8zM508.8 192l392.512 392.576-316.8 316.8L192 508.8V192h316.8z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconDiscount.defaultProps = {
  size: 18,
};

IconDiscount = React.memo ? React.memo(IconDiscount) : IconDiscount;

export default IconDiscount;
