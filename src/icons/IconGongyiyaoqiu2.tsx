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

let IconGongyiyaoqiu2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.6496 85.3504c23.552 0 42.7008 19.0976 42.7008 42.6496v320h-64V149.3504H234.6496v725.2992h362.7008v64h-384a42.6496 42.6496 0 0 1-42.7008-42.6496v-768c0-23.552 19.0976-42.6496 42.7008-42.6496zM821.3504 512a96 96 0 0 1 32 186.5216V768h106.6496c11.776 0 21.3504 9.5744 21.3504 21.3504v128c0 11.776-9.5744 21.2992-21.3504 21.2992h-277.3504a21.3504 21.3504 0 0 1-21.2992-21.2992v-128c0-11.776 9.5232-21.3504 21.2992-21.3504h106.6496v-69.4784A96.0512 96.0512 0 0 1 821.3504 512z m106.6496 309.3504h-213.3504v64h213.3504v-64zM512 597.3504c11.776 0 21.3504 9.5232 21.3504 21.2992v21.3504c0 11.776-9.5744 21.3504-21.3504 21.3504H320a21.3504 21.3504 0 0 1-21.3504-21.3504v-21.3504c0-11.776 9.5744-21.2992 21.3504-21.2992z m309.3504-32a42.6496 42.6496 0 1 0 0 85.2992 42.6496 42.6496 0 0 0 0-85.2992zM704 426.6496c11.776 0 21.3504 9.5744 21.3504 21.3504v21.3504c0 11.776-9.5744 21.2992-21.3504 21.2992h-384a21.3504 21.3504 0 0 1-21.3504-21.2992V448c0-11.776 9.5744-21.3504 21.3504-21.3504z m0-170.6496c11.776 0 21.3504 9.5744 21.3504 21.3504v21.2992c0 11.776-9.5744 21.3504-21.3504 21.3504h-384a21.3504 21.3504 0 0 1-21.3504-21.3504v-21.2992c0-11.776 9.5744-21.3504 21.3504-21.3504z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconGongyiyaoqiu2.defaultProps = {
  size: 18,
};

IconGongyiyaoqiu2 = React.memo ? React.memo(IconGongyiyaoqiu2) : IconGongyiyaoqiu2;

export default IconGongyiyaoqiu2;
