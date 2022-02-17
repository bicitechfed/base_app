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

let IconDongtaijiankongon: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1117 1024" width={size} height={size} {...rest}>
      <Path
        d="M595.781818 791.272727v74.472728h130.327273a18.618182 18.618182 0 1 1 0 37.236363H390.981818a18.618182 18.618182 0 1 1 0-37.236363h130.327273V791.272727H260.654545a37.236364 37.236364 0 0 1-37.236363-37.236363V344.436364a37.236364 37.236364 0 0 1 37.236363-37.236364h595.781819a37.236364 37.236364 0 0 1 37.236363 37.236364v409.6a37.236364 37.236364 0 0 1-37.236363 37.236363H595.781818z m195.118546-227.653818v-40.215273H616.541091l-18.711273 56.226909L490.589091 418.909091l-34.816 104.494545H335.127273v40.215273h147.456L501.294545 507.345455l107.240728 160.721454 34.909091-104.494545h147.456z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconDongtaijiankongon.defaultProps = {
  size: 18,
};

IconDongtaijiankongon = React.memo ? React.memo(IconDongtaijiankongon) : IconDongtaijiankongon;

export default IconDongtaijiankongon;
