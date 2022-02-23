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

let IconGenderMale: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M894.4 230.4a38.4 38.4 0 0 0-38.4-38.4h-217.6v64h152.512l-237.44 237.44a224 224 0 1 0 44.352 46.08l232.576-232.512V448h64V230.4z m-591.552 553.152a160 160 0 1 1 226.304-226.304 160 160 0 0 1-226.304 226.304z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconGenderMale.defaultProps = {
  size: 18,
};

IconGenderMale = React.memo ? React.memo(IconGenderMale) : IconGenderMale;

export default IconGenderMale;
