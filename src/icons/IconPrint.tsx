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

let IconPrint: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 128v128H192c-35.584 0-64 28.416-64 64v320c0 35.584 28.416 64 64 64h64v192h512v-192h64c35.584 0 64-28.416 64-64V320c0-35.584-28.416-64-64-64h-64V128H256z m448 128H320V192h384v64zM192 320h640v320h-64V512H256v128H192V320z m128 512V576h384v256H320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPrint.defaultProps = {
  size: 18,
};

IconPrint = React.memo ? React.memo(IconPrint) : IconPrint;

export default IconPrint;
