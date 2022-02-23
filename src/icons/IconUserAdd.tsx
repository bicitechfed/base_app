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

let IconUserAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M331.648 281.024C331.648 161.152 425.408 64 541.12 64c115.648 0 209.408 97.152 209.408 217.024s-93.76 217.088-209.408 217.088c-115.712 0-209.472-97.216-209.472-217.088z m349.056 0c0-79.872-62.464-144.64-139.584-144.64S401.472 201.088 401.472 280.96c0 79.936 62.528 144.704 139.648 144.704s139.584-64.768 139.584-144.64z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M541.12 534.272c48.192 0 94.976 6.336 139.584 18.24v75.072a474.88 474.88 0 0 0-418.88 69.76v126.336h418.88V896H261.824C223.232 896 192 863.616 192 823.68v-131.968c0-27.136 14.656-51.968 37.952-64.384l40.32-20.736h0.192a540.864 540.864 0 0 1 270.656-72.32z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <Path
        d="M820.352 534.272h-69.76v144.64H610.816v72.384h139.648V896h69.824v-144.64H960v-72.384h-139.648z"
        fill={getIconColor(color, 2, '#000000')}
      />
    </Svg>
  );
};

IconUserAdd.defaultProps = {
  size: 18,
};

IconUserAdd = React.memo ? React.memo(IconUserAdd) : IconUserAdd;

export default IconUserAdd;
