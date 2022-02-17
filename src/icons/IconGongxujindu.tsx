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

let IconGongxujindu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.3504a426.6496 426.6496 0 1 1 0 853.2992 426.6496 426.6496 0 0 1 0-853.2992z m0 64a362.6496 362.6496 0 1 0 0 725.2992 362.6496 362.6496 0 0 0 0-725.2992z m13.4144 128h-48.128a8.0384 8.0384 0 0 0-7.936 7.9872v275.3024c0 2.56 1.1776 5.0176 3.2768 6.5024l165.3248 120.6784c3.584 2.6112 8.6016 1.8944 11.1616-1.6896l28.6208-39.0144a7.8848 7.8848 0 0 0-1.6896-11.1616l-142.592-103.1168V285.3376a8.0384 8.0384 0 0 0-8.0384-7.9872z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconGongxujindu.defaultProps = {
  size: 18,
};

IconGongxujindu = React.memo ? React.memo(IconGongxujindu) : IconGongxujindu;

export default IconGongxujindu;
