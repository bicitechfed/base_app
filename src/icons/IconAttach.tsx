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

let IconAttach: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M816.64 229.248a129.088 129.088 0 0 0-181.952 0.576l-461.44 461.44L128 645.888l461.44-461.44a193.088 193.088 0 1 1 273.024 273.088l-373.76 373.76a120.576 120.576 0 0 1-170.496-170.496l363.136-363.136 45.248 45.248-363.136 363.136a56.512 56.512 0 1 0 80 80l373.76-373.76a129.088 129.088 0 0 0-0.576-183.104z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconAttach.defaultProps = {
  size: 18,
};

IconAttach = React.memo ? React.memo(IconAttach) : IconAttach;

export default IconAttach;
