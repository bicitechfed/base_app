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

let IconUsergroup: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 64c33.664 0 65.408 8 93.568 22.144l-40.32 52.032a144 144 0 1 0-56.192 277.76v64A208 208 0 0 1 384 64zM34.56 603.904A821.056 821.056 0 0 1 381.12 526.08v64c-113.28 0.448-220.352 25.792-317.056 70.656V768h118.848v64H32a32 32 0 0 1-32-32v-140.224c0-23.808 13.12-45.824 34.56-55.872z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M640 532.096a208 208 0 1 1 0-416 208 208 0 0 1 0 416z m0-64a144 144 0 1 0 0-288 144 144 0 0 0 0 288zM1024 737.152a61.184 61.184 0 0 0-34.624-55.872A821.12 821.12 0 0 0 640 603.52a821.12 821.12 0 0 0-349.44 77.76 61.184 61.184 0 0 0-34.56 55.872V896a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32v-158.848z m-64 1.024V864H320v-125.824a757.12 757.12 0 0 1 320-70.656c114.368 0 222.464 25.408 320 70.656z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  );
};

IconUsergroup.defaultProps = {
  size: 18,
};

IconUsergroup = React.memo ? React.memo(IconUsergroup) : IconUsergroup;

export default IconUsergroup;
