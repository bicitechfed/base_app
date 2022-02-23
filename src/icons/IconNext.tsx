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

let IconNext: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 128h64v768h-64zM694.464 485.12a32 32 0 0 1 0 53.76L241.344 832A32 32 0 0 1 192 805.12V218.88A32 32 0 0 1 241.408 192l453.12 293.12zM256 277.632v468.736L618.24 512 256 277.632z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconNext.defaultProps = {
  size: 18,
};

IconNext = React.memo ? React.memo(IconNext) : IconNext;

export default IconNext;
