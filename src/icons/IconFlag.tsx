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

let IconFlag: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 128v832h64V128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M192 128h669.44a34.56 34.56 0 0 1 34.56 34.56v442.88a34.56 34.56 0 0 1-34.56 34.56H192V128z m64 64v384h576V192H256z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFlag.defaultProps = {
  size: 18,
};

IconFlag = React.memo ? React.memo(IconFlag) : IconFlag;

export default IconFlag;
