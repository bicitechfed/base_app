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

let IconFilterClear: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 128h575.68a64 64 0 0 1 43.968 110.464L575.808 461.696v354.304l-192 144V461.696L147.904 238.464a64 64 0 0 1-7.616-84.288l5.12-6.208A64 64 0 0 1 192 128z m575.68 64H192l255.808 242.24v397.696l64-48V434.24L767.68 192zM749.056 640l90.496 90.496L930.112 640l45.248 45.248-90.496 90.496 90.496 90.56-45.248 45.248-90.56-90.56-90.496 90.56-45.248-45.248 90.496-90.56-90.496-90.496z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFilterClear.defaultProps = {
  size: 18,
};

IconFilterClear = React.memo ? React.memo(IconFilterClear) : IconFilterClear;

export default IconFilterClear;
