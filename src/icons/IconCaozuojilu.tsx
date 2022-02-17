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

let IconCaozuojilu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 64H192a31.9488 31.9488 0 0 0-32 32v832c0 17.7152 14.336 32 32 32h640c17.7152 0 32-14.336 32-32V96a31.9488 31.9488 0 0 0-32-32z m-39.9872 824.0128H231.936v-201.0112h97.8944a194.048 194.048 0 0 0 59.136 84.6848 193.1264 193.1264 0 0 0 305.1008-84.6848h97.8944v-62.976H643.584l-5.1712 24.6784A129.2288 129.2288 0 0 1 512 752.0256a129.4336 129.4336 0 0 1-126.464-103.3216l-5.2224-24.6784H231.936V135.936H792.064v752.0256zM320 340.992h384c4.4032 0 7.9872-3.584 7.9872-7.9872v-48.0256a8.0384 8.0384 0 0 0-7.9872-7.9872h-384a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872z m0 160h384c4.4032 0 7.9872-3.584 7.9872-7.9872V444.928a8.0384 8.0384 0 0 0-7.9872-7.9872h-384a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCaozuojilu.defaultProps = {
  size: 18,
};

IconCaozuojilu = React.memo ? React.memo(IconCaozuojilu) : IconCaozuojilu;

export default IconCaozuojilu;
