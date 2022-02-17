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

let IconXuanzerili: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M867.555556 120.888889h-142.222223V85.333333a35.555556 35.555556 0 1 0-71.111111 0v35.555556h-284.444444V85.333333a35.555556 35.555556 0 1 0-71.111111 0v35.555556h-142.222223A66.844444 66.844444 0 0 0 85.333333 192v711.111111a66.844444 66.844444 0 0 0 71.111111 71.111111h711.111112a66.844444 66.844444 0 0 0 71.111111-71.111111v-711.111111a66.844444 66.844444 0 0 0-71.111111-71.111111zM440.888889 654.222222a34.872889 34.872889 0 0 1-34.872889 34.872889h-142.222222A34.872889 34.872889 0 0 1 227.555556 654.222222V512c0-19.228444 15.587556-34.872889 34.816-34.872889h142.222222A34.872889 34.872889 0 0 1 440.888889 512v142.222222z m426.666667-320H156.444444v-142.222222h142.222223V227.555556A35.555556 35.555556 0 1 0 369.777778 227.555556v-35.555556h284.444444V227.555556a35.555556 35.555556 0 1 0 71.111111 0v-35.555556h142.222223v142.222222z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconXuanzerili.defaultProps = {
  size: 18,
};

IconXuanzerili = React.memo ? React.memo(IconXuanzerili) : IconXuanzerili;

export default IconXuanzerili;
