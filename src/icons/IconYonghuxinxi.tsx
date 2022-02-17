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

let IconYonghuxinxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M819.2 544.426667v345.557333c0 17.493333-14.165333 31.616-31.616 31.616H204.8v-345.6c0-17.408 14.165333-31.573333 31.616-31.573333h151.253333c37.248 18.816 79.530667 29.44 124.330667 29.44s87.04-10.624 124.330667-29.44H819.2zM512 102.4c114.944 0 208.128 91.477333 208.128 204.288 0 112.853333-93.184 204.330667-208.128 204.330667S303.872 419.541333 303.872 306.688C303.872 193.877333 397.056 102.4 512 102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYonghuxinxi.defaultProps = {
  size: 18,
};

IconYonghuxinxi = React.memo ? React.memo(IconYonghuxinxi) : IconYonghuxinxi;

export default IconYonghuxinxi;
