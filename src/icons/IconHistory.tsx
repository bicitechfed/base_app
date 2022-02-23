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

let IconHistory: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M521.92 194.688c188.416 0 339.456 150.144 339.456 333.312s-151.04 333.312-339.456 333.312c-157.568 0-288.96-104.96-327.808-246.4L128 625.6C172.224 799.36 331.84 928 521.92 928c224.256 0 406.08-179.072 406.08-400S746.24 128 521.92 128a407.552 407.552 0 0 0-327.424 163.328V185.152H128V386.56a32 32 0 0 0 32 32h200.128V351.68H233.856a340.288 340.288 0 0 1 288-156.992z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M463.936 367.872v184.96l169.344 169.344 45.248-45.248L528 526.272V367.872z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHistory.defaultProps = {
  size: 18,
};

IconHistory = React.memo ? React.memo(IconHistory) : IconHistory;

export default IconHistory;
