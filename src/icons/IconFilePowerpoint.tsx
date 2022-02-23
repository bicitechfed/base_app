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

let IconFilePowerpoint: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 896V128h288v256.832h256V480h64V365.056a64 64 0 0 0-18.304-44.8L613.12 83.2a64 64 0 0 0-45.696-19.2h-311.68C225.28 64 192 85.568 192 123.008v777.984c0 37.44 33.28 59.008 63.68 59.008H480v-64H256z m500.608-575.168H608V169.344l148.608 151.488z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M580.8 580.8V960h54.4v-164.8H800c32.64 0 59.2-26.496 59.2-59.2V640a59.2 59.2 0 0 0-59.2-59.2H580.8z m219.2 160H635.2v-105.6H800c2.624 0 4.8 2.176 4.8 4.8v96a4.8 4.8 0 0 1-4.8 4.8z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFilePowerpoint.defaultProps = {
  size: 18,
};

IconFilePowerpoint = React.memo ? React.memo(IconFilePowerpoint) : IconFilePowerpoint;

export default IconFilePowerpoint;
