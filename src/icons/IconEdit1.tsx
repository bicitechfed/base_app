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

let IconEdit1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M904.448 380.8L696.96 173.248 742.144 128l207.552 207.552zM382.208 903.04l-231.232 46.272a19.2 19.2 0 0 1-22.592-22.592l46.272-231.232 467.008-467.008 207.616 207.552-467.072 467.072z m376.512-467.008l-117.056-117.056L233.6 727.04l-29.312 146.368 146.368-29.248 408.064-408.128zM960 768h-256v64h256zM960 896H544v64H960z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
    </Svg>
  );
};

IconEdit1.defaultProps = {
  size: 18,
};

IconEdit1 = React.memo ? React.memo(IconEdit1) : IconEdit1;

export default IconEdit1;
