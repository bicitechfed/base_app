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

let IconLogoChrome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288.064 124.096a448 448 0 1 1 448 775.936 448 448 0 0 1-448-775.936z m573.056 227.84h-192.128a224.128 224.128 0 0 1 40.064 266.432h0.064l-159.296 275.968A384 384 0 0 0 861.12 352z m-385.28 542.464l96.32-166.784a227.2 227.2 0 0 1-71.232 8.128 224 224 0 0 1-191.232-124.16L161.6 355.008A383.488 383.488 0 0 0 179.52 704a383.552 383.552 0 0 0 296.32 190.336zM320.128 179.52A382.528 382.528 0 0 0 198.272 290.56L293.568 455.68a224.192 224.192 0 0 1 195.52-166.656l2.56-0.256a224 224 0 0 1 29.44-0.704h302.848A384 384 0 0 0 320 179.52zM510.336 352c-3.968 0-7.872 0.128-11.712 0.384l-2.432 0.192a160 160 0 1 0 28.608 318.72 160 160 0 0 0-14.336-319.36h-0.128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoChrome.defaultProps = {
  size: 18,
};

IconLogoChrome = React.memo ? React.memo(IconLogoChrome) : IconLogoChrome;

export default IconLogoChrome;
