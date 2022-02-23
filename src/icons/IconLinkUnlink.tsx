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

let IconLinkUnlink: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 128v128h64V128zM523.328 613.824l-147.072 147.072a80 80 0 0 1-113.152-113.152l147.072-147.072-45.248-45.248-147.072 147.072a144 144 0 0 0 203.648 203.648l147.072-147.072-45.248-45.248zM613.76 523.328l45.312 45.248 147.072-147.072a144 144 0 1 0-203.648-203.648L455.424 364.928l45.248 45.248 147.072-147.072a80 80 0 0 1 113.152 113.152L613.824 523.328zM768 576h128v64h-128zM128 448h128V384H128zM640 768v128H576v-128zM750.848 705.6l103.808 103.744-45.312 45.248-103.68-103.68zM169.344 214.592l103.808 103.808 45.248-45.248-103.744-103.808z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLinkUnlink.defaultProps = {
  size: 18,
};

IconLinkUnlink = React.memo ? React.memo(IconLinkUnlink) : IconLinkUnlink;

export default IconLinkUnlink;
