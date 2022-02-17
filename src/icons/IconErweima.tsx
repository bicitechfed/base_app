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

let IconErweima: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M468 128H160c-17.696 0-32 14.304-32 32v308c0 4.384 3.584 8 8 8h332a8 8 0 0 0 8-8V136a8 8 0 0 0-8-8z m-56 284H192V192h220v220z m-138.016-74.016h56a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v56c0 4.416 3.616 8 8 8z m194.016 210.016H136a8 8 0 0 0-8 8V864c0 17.696 14.304 32 32 32h308a8 8 0 0 0 8-8V556a8 8 0 0 0-8-8zM412 832H192v-220h220V832z m-138.016-74.016h56a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v56c0 4.416 3.616 8 8 8zM864 128h-308a8 8 0 0 0-8 8v332c0 4.384 3.616 8 8 8H888a8 8 0 0 0 8-8V160c0-17.696-14.304-32-32-32z m-32 284h-220V192H832v220z m-138.016-74.016h56a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v56c0 4.416 3.616 8 8 8z m194.016 210.016h-48a8 8 0 0 0-8 8v134.016h-78.016v-134.016a8 8 0 0 0-8-8h-189.984a8 8 0 0 0-8 8V888c0 4.384 3.616 8 8 8h48a8 8 0 0 0 8-8v-244h78.016v102.016c0 4.384 3.584 8 8 8h189.984a8 8 0 0 0 8-8v-190.016a8 8 0 0 0-8-8zM745.984 832h-48a8 8 0 0 0-8 8v48c0 4.384 3.616 8 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z m142.016 0h-48a8 8 0 0 0-8 8v48c0 4.384 3.616 8 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconErweima.defaultProps = {
  size: 18,
};

IconErweima = React.memo ? React.memo(IconErweima) : IconErweima;

export default IconErweima;
