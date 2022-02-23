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

let IconCreditcard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 704h192v-64h-192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M960 768V256a64 64 0 0 0-64-64H128a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64z m-64-512v96H128V256h768zM128 768V416h768V768H128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCreditcard.defaultProps = {
  size: 18,
};

IconCreditcard = React.memo ? React.memo(IconCreditcard) : IconCreditcard;

export default IconCreditcard;
