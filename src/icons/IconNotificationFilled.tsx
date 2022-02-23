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

let IconNotificationFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576 129.728V64H512v65.728A288 288 0 0 0 256 416V704l-57.6 76.8a32 32 0 0 0 25.6 51.2h163.2a160 160 0 0 0 313.6 0h163.2a32 32 0 0 0 25.6-51.2L832 704V416a288 288 0 0 0-256-286.272z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconNotificationFilled.defaultProps = {
  size: 18,
};

IconNotificationFilled = React.memo ? React.memo(IconNotificationFilled) : IconNotificationFilled;

export default IconNotificationFilled;
