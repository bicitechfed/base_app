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

let IconCheckRectangleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 832a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v640z m320-233.152l241.6-241.6 45.248 45.248L448 689.344 288.832 530.24l45.248-45.248L448 598.912z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCheckRectangleFilled.defaultProps = {
  size: 18,
};

IconCheckRectangleFilled = React.memo ? React.memo(IconCheckRectangleFilled) : IconCheckRectangleFilled;

export default IconCheckRectangleFilled;
