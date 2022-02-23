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

let IconCaretLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.312 480l341.376-256v512l-341.376-256zM268.8 454.4a32 32 0 0 0 0 51.2l426.688 320a32 32 0 0 0 51.2-25.6v-640a32 32 0 0 0-51.2-25.6L268.8 454.4z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCaretLeft.defaultProps = {
  size: 18,
};

IconCaretLeft = React.memo ? React.memo(IconCaretLeft) : IconCaretLeft;

export default IconCaretLeft;
