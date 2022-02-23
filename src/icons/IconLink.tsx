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

let IconLink: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M419.84 781.952l135.808-135.808 45.248 45.248-135.744 135.808a160 160 0 0 1-226.304-226.304l135.808-135.744 45.248 45.248-135.808 135.744a96 96 0 0 0 135.808 135.808zM691.392 600.96l-45.248-45.312 135.744-135.744a96 96 0 1 0-135.68-135.808L510.336 419.904l-45.248-45.248 135.744-135.808a160 160 0 0 1 226.304 226.304l-135.808 135.744z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M600.96 419.84L419.84 600.96l45.312 45.184 180.992-180.992z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLink.defaultProps = {
  size: 18,
};

IconLink = React.memo ? React.memo(IconLink) : IconLink;

export default IconLink;
