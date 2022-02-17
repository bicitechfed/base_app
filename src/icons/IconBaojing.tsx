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

let IconBaojing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M973.320646 901.510967h-34.302049v-7.0396c0-150.775425 0-301.550849-0.127993-452.198281a452.454267 452.454267 0 0 0-2.239872-45.949387 439.718991 439.718991 0 0 0-53.500958-171.830227C788.691147 54.647132 599.069932-32.067936 412.264556 11.001614c-198.772695 45.821394-337.260818 224.115253-337.260818 432.231417v458.213939h-5.951662c-12.287301 0-24.574602-0.063996-36.861903 0.063997a32.510151 32.510151 0 0 0-30.974239 24.446609c-0.319982 1.151934-0.767956 2.239873-1.151934 3.327811v10.303414c0.511971 1.727902 1.279927 3.5198 1.791898 5.247701a32.510151 32.510151 0 0 0 29.758308 22.590716h941.70644c24.510606 0 31.806191-4.991716 40.637689-27.838417v-10.303414c-8.831498-22.846701-16.127083-27.77442-40.637689-27.77442z m-98.874376-0.319982H139.576065V442.273086c0-178.357856 120.569143-330.669193 291.311432-367.979071 193.844975-42.621576 387.561957 82.299319 433.447348 279.344112 6.719618 28.670369 10.111425 58.044699 10.111425 87.483024v460.069834z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconBaojing.defaultProps = {
  size: 18,
};

IconBaojing = React.memo ? React.memo(IconBaojing) : IconBaojing;

export default IconBaojing;
