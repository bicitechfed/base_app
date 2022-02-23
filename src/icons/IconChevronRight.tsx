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

let IconChevronRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M755.776 553.28l-331.712 321.408L384 835.712l312.128-302.464L384 230.912 424.064 192l330.304 319.936a27.904 27.904 0 0 1 1.344 41.344z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronRight.defaultProps = {
  size: 18,
};

IconChevronRight = React.memo ? React.memo(IconChevronRight) : IconChevronRight;

export default IconChevronRight;
