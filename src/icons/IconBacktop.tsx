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

let IconBacktop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192h768V128H128zM216.192 654.72l263.04-258.112v553.472h64.64V396.16l267.52 260.928 45.696-44.8-323.2-315.264a32 32 0 0 0-44.8 0.064l-318.72 312.96 45.824 44.608z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBacktop.defaultProps = {
  size: 18,
};

IconBacktop = React.memo ? React.memo(IconBacktop) : IconBacktop;

export default IconBacktop;
