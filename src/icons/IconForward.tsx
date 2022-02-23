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

let IconForward: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M944.512 487.04a32 32 0 0 1 0 50.048L583.68 825.152a32 32 0 0 1-51.968-24.96V527.04a31.936 31.936 0 0 1-7.744 9.6L180.48 822.912a32 32 0 0 1-52.48-24.576V225.856a32 32 0 0 1 52.48-24.576l343.488 286.208a31.872 31.872 0 0 1 7.744 9.6V224.064a32 32 0 0 1 51.968-24.96l360.832 288z m-348.8-196.48v443.072l277.504-221.504L595.712 290.56zM192 294.208v435.84l261.44-217.92L192 294.208z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconForward.defaultProps = {
  size: 18,
};

IconForward = React.memo ? React.memo(IconForward) : IconForward;

export default IconForward;
