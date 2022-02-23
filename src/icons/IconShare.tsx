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

let IconShare: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M632.576 312.96a148.288 148.288 0 1 0-32.256-55.296l-215.04 125.44a148.288 148.288 0 1 0 0 201.152l215.04 125.312a148.288 148.288 0 1 0 32.32-55.232l-215.04-125.312a148.224 148.224 0 0 0 0-90.624l214.976-125.44zM741.568 128a84.288 84.288 0 1 1 0 168.64 84.288 84.288 0 0 1 0-168.64zM348.16 439.552a32.192 32.192 0 0 0 1.92 3.392 83.904 83.904 0 0 1-1.92 84.864 84.224 84.224 0 1 1 0-88.256z m309.12 315.52c0-13.952 3.328-27.072 9.28-38.656a33.28 33.28 0 0 0 4.544-7.68 84.224 84.224 0 0 1 154.752 46.336 84.288 84.288 0 0 1-168.64 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconShare.defaultProps = {
  size: 18,
};

IconShare = React.memo ? React.memo(IconShare) : IconShare;

export default IconShare;
