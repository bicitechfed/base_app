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

let IconErrorCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0zM544 256v352h-64V256h64z m-70.784 448h76.8v76.8h-76.8V704z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconErrorCircleFilled.defaultProps = {
  size: 18,
};

IconErrorCircleFilled = React.memo ? React.memo(IconErrorCircleFilled) : IconErrorCircleFilled;

export default IconErrorCircleFilled;
