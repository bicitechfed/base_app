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

let IconInfoCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896zM473.6 256h76.8v76.8H473.6V256z m6.784 160h64V768h-64V416z"
        fill={getIconColor(color, 0, '#242424')}
      />
    </Svg>
  );
};

IconInfoCircleFilled.defaultProps = {
  size: 18,
};

IconInfoCircleFilled = React.memo ? React.memo(IconInfoCircleFilled) : IconInfoCircleFilled;

export default IconInfoCircleFilled;
