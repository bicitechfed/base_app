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

let IconRefresh: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528 189.504c185.408 0 336.192 151.232 336.192 338.432h61.568C925.76 307.072 747.648 128 528 128A397.056 397.056 0 0 0 189.44 318.08V185.152H128v198.784a32 32 0 0 0 32 32h197.568v-61.696H239.36a335.744 335.744 0 0 1 288.64-164.736zM130.304 527.936h61.44c0 187.2 150.912 338.368 336.256 338.368a335.744 335.744 0 0 0 288.64-164.736h-118.208v-61.696H896a32 32 0 0 1 32 32v198.848h-61.376v-132.928a397.056 397.056 0 0 1-338.56 190.08c-219.712 0-397.76-179.072-397.76-400z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconRefresh.defaultProps = {
  size: 18,
};

IconRefresh = React.memo ? React.memo(IconRefresh) : IconRefresh;

export default IconRefresh;
