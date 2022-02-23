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

let IconHelp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 128C422.592 128 320 220.672 320 339.2h64C384 260.096 453.696 192 544 192S704 260.096 704 339.2c0 56.576-49.6 112-112.64 135.936l-0.192 0.064C545.536 492.8 512 535.68 512 587.52v84.48h64V587.52c0-22.784 14.72-43.52 38.144-52.544C691.456 505.6 768 432.064 768 339.2 768 220.672 665.408 128 544 128zM544 736a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHelp.defaultProps = {
  size: 18,
};

IconHelp = React.memo ? React.memo(IconHelp) : IconHelp;

export default IconHelp;
