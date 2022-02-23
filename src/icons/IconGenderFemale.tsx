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

let IconGenderFemale: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 128a224 224 0 0 0-31.168 445.824v86.912h-128v64h128v224h64v-224h128v-64h-128V573.632A224 224 0 0 0 544 128z m0 64a160 160 0 1 1 0 320 160 160 0 0 1 0-320z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconGenderFemale.defaultProps = {
  size: 18,
};

IconGenderFemale = React.memo ? React.memo(IconGenderFemale) : IconGenderFemale;

export default IconGenderFemale;
