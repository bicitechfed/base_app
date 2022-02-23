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

let IconStopCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M263.104 139.52a448 448 0 1 1 497.792 744.96A448 448 0 0 1 263.104 139.52zM352 352v320h320v-320h-320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconStopCircleFilled.defaultProps = {
  size: 18,
};

IconStopCircleFilled = React.memo ? React.memo(IconStopCircleFilled) : IconStopCircleFilled;

export default IconStopCircleFilled;
