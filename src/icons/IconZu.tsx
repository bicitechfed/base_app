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

let IconZu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M903.9872 160H120.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v64c0 4.4032 3.584 8.0384 7.9872 8.0384h783.9744c4.4032 0 8.0384-3.584 8.0384-8.0384v-64a8.0384 8.0384 0 0 0-8.0384-7.9872z m0 624.0256H120.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v64c0 4.4032 3.584 7.9872 7.9872 7.9872h783.9744c4.4032 0 8.0384-3.584 8.0384-7.9872v-64a8.0384 8.0384 0 0 0-8.0384-7.9872z m0-312.0128H120.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v64c0 4.4032 3.584 7.9872 7.9872 7.9872h783.9744c4.4032 0 8.0384-3.584 8.0384-7.9872v-64a8.0384 8.0384 0 0 0-8.0384-7.9872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZu.defaultProps = {
  size: 18,
};

IconZu = React.memo ? React.memo(IconZu) : IconZu;

export default IconZu;
