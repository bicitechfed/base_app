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

let IconCaretDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 678.976l279.232-356.224H232.768L512 679.04z m27.904 75.648a35.84 35.84 0 0 1-55.808 0L135.04 309.44C117.76 287.36 134.208 256 162.944 256h698.112c28.736 0 45.184 31.36 27.904 53.44L539.904 754.56z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCaretDown.defaultProps = {
  size: 18,
};

IconCaretDown = React.memo ? React.memo(IconCaretDown) : IconCaretDown;

export default IconCaretDown;
