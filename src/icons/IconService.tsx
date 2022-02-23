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

let IconService: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M193.024 388.928a352 352 0 0 1 701.952 0 32 32 0 0 1 1.024 8.064v256a32 32 0 0 1-1.344 9.28A288 288 0 0 1 608 921.984h-64v-64h64a224.064 224.064 0 0 0 218.176-172.992H704a32 32 0 0 1-32-32v-256a32 32 0 0 1 32-32h123.52a288.064 288.064 0 0 0-567.04 0H384a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-256a32 32 0 0 1 1.024-8.064zM832 428.992h-96v192H832v-192z m-576 0v192h96v-192H256z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconService.defaultProps = {
  size: 18,
};

IconService = React.memo ? React.memo(IconService) : IconService;

export default IconService;
