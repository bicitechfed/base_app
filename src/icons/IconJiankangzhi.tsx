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

let IconJiankangzhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M367.0016 20.48c13.6192 0 24.7808 11.008 24.7808 24.832v49.5104h99.328V45.312c0-13.6704 11.008-24.832 24.7808-24.832 14.0288 0 25.1904 11.008 25.1904 24.832v49.5104h99.1744V45.312c0-13.6704 11.008-24.832 24.7808-24.832 14.0288 0 25.1904 11.008 25.1904 24.832v49.5104h132.4032c38.0928 0 66.304 45.568 66.6624 82.1248v738.7136c0 36.9152-31.6928 74.5984-69.6832 74.5984l-604.672 0.1024C176.9472 990.3616 143.36 963.584 143.36 926.5664V177.0496c0-36.6592 24.576-82.2272 75.1616-82.2272h123.2896V45.312C341.8112 31.6416 352.768 20.48 366.592 20.48z m318.7712 588.8c-22.016 0-42.496 20.8896-56.0128 36.5568-13.4656-15.6672-33.9456-36.5568-56.0128-36.5568-39.68 0-71.9872 30.4128-71.9872 67.7376 0 22.272 11.5712 37.888 20.8896 50.4832 27.0336 36.5056 94.976 81.92 97.8432 83.8144a16.7424 16.7424 0 0 0 18.5344 0c2.8672-1.8944 70.8096-47.3088 97.8432-83.8144 9.3184-12.544 20.8896-28.16 20.8896-50.4832 0-37.376-32.256-67.7376-71.9872-67.7376z m-219.648-165.6832H316.7232a24.576 24.576 0 0 0 0 49.152h149.4016a24.576 24.576 0 0 0 0-49.152z m99.328-149.4016H316.672a24.576 24.576 0 0 0 0 49.152h248.6784a24.576 24.576 0 0 0 0-49.152z"
        fill={getIconColor(color, 0, '#52C41A')}
      />
    </Svg>
  );
};

IconJiankangzhi.defaultProps = {
  size: 18,
};

IconJiankangzhi = React.memo ? React.memo(IconJiankangzhi) : IconJiankangzhi;

export default IconJiankangzhi;
