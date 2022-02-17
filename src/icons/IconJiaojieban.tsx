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

let IconJiaojieban: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M862.506667 573.098667H136.32a8.32 8.32 0 0 0-8.32 8.234666v61.824c0 4.522667 3.754667 8.234667 8.362667 8.234667h631.466666l-150.528 188.586667c-4.266667 5.333333-0.426667 13.354667 6.570667 13.354666h75.648c5.12 0 9.898667-2.261333 13.141333-6.272l176.128-220.586666c17.237333-21.632 1.706667-53.376-26.282666-53.376z m25.173333-243.157334H256.085333l150.613334-188.586666A8.277333 8.277333 0 0 0 400.085333 128H324.48a16.810667 16.810667 0 0 0-13.141333 6.272L135.253333 354.858667c-17.237333 21.632-1.706667 53.376 26.197334 53.376h726.229333A8.32 8.32 0 0 0 896 400V338.176a8.32 8.32 0 0 0-8.362667-8.234667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconJiaojieban.defaultProps = {
  size: 18,
};

IconJiaojieban = React.memo ? React.memo(IconJiaojieban) : IconJiaojieban;

export default IconJiaojieban;
