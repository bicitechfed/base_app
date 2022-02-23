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

let IconBackward: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M76.032 537.088a32 32 0 0 1 0-49.984l360.768-288a32 32 0 0 1 51.968 24.96v273.024a31.936 31.936 0 0 1 7.808-9.6l343.488-286.208a32 32 0 0 1 52.48 24.576v572.48a32 32 0 0 1-52.48 24.576L496.576 536.704a31.936 31.936 0 0 1-7.808-9.6v273.024a32 32 0 0 1-51.968 25.024l-360.768-288z m348.8 196.544V290.56L147.2 512.128l277.504 221.504z m403.712-3.648V294.208L567.04 512.128l261.504 217.856z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBackward.defaultProps = {
  size: 18,
};

IconBackward = React.memo ? React.memo(IconBackward) : IconBackward;

export default IconBackward;
