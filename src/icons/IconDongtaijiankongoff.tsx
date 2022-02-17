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

let IconDongtaijiankongoff: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1117 1024" width={size} height={size} {...rest}>
      <Path
        d="M856.436364 307.2a37.236364 37.236364 0 0 1 37.236363 37.236364v409.6a37.236364 37.236364 0 0 1-37.236363 37.236363H595.781818v74.472728h130.327273a18.618182 18.618182 0 1 1 0 37.236363H390.981818a18.618182 18.618182 0 1 1 0-37.236363h130.327273V791.272727H260.654545a37.236364 37.236364 0 0 1-37.236363-37.236363V344.436364a37.236364 37.236364 0 0 1 37.236363-37.236364h595.781819z m-9.309091 46.545455H269.917091V744.727273H521.309091c14.708364 0 27.787636 6.795636 36.305454 17.454545L558.545455 763.345455l0.930909-1.210182c7.447273-9.309091 18.432-15.685818 30.859636-17.128728L595.781818 744.727273h251.345455V353.745455zM490.589091 418.909091l107.287273 160.721454 18.711272-56.226909h174.266182v40.215273H643.444364l-34.909091 104.494546L501.294545 507.345455l-18.711272 56.226909H335.127273v-40.215273h120.692363L490.589091 418.909091z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

IconDongtaijiankongoff.defaultProps = {
  size: 18,
};

IconDongtaijiankongoff = React.memo ? React.memo(IconDongtaijiankongoff) : IconDongtaijiankongoff;

export default IconDongtaijiankongoff;
