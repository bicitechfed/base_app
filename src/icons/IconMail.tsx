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

let IconMail: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 256a64 64 0 0 1 64-64h704a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H192a64 64 0 0 1-64-64V256z m742.336 0H217.6L544 473.6 870.336 256zM192 315.776V768h704V315.776L544 550.464 192 315.776z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMail.defaultProps = {
  size: 18,
};

IconMail = React.memo ? React.memo(IconMail) : IconMail;

export default IconMail;
