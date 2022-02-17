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

let IconFuxuankuang1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M753.28 336.256l-269.568 373.76a40.704 40.704 0 0 1-66.176 0L257.92 488.832a10.24 10.24 0 0 1 8.32-16.256h60.032c13.056 0 25.472 6.272 33.152 17.024L450.56 616.064l201.216-279.04A40.96 40.96 0 0 1 684.928 320h60.032a10.24 10.24 0 0 1 8.32 16.256z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconFuxuankuang1.defaultProps = {
  size: 18,
};

IconFuxuankuang1 = React.memo ? React.memo(IconFuxuankuang1) : IconFuxuankuang1;

export default IconFuxuankuang1;
