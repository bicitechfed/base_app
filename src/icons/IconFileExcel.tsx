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

let IconFileExcel: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 896V128h288v256.832h256V512h64V365.056a64 64 0 0 0-18.304-44.8L613.12 83.2a64 64 0 0 0-45.696-19.2h-311.68C225.28 64 192 85.568 192 123.008v777.984c0 37.44 33.28 59.008 63.68 59.008H480v-64H256z m500.608-575.168H608V169.344l148.608 151.488z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M571.776 608l122.624 179.84L569.472 960h71.168l88.192-121.6 82.944 121.6h69.76l-116.736-171.136L896 608h-71.168l-94.528 130.304L641.472 608z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFileExcel.defaultProps = {
  size: 18,
};

IconFileExcel = React.memo ? React.memo(IconFileExcel) : IconFileExcel;

export default IconFileExcel;
