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

let IconUsergroupAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M847.04512 816v112h64v-112h112v-64h-112V640h-64v112h-112v64zM477.57312 86.144A208 208 0 1 0 381.06112 480v-64a144 144 0 1 1 56.128-277.76l40.32-52.032zM381.06112 526.08A821.056 821.056 0 0 0 34.56512 603.968a61.184 61.184 0 0 0-34.624 55.872V800a32 32 0 0 0 32 32h150.848v-64H64.00512v-107.2a757.056 757.056 0 0 1 317.056-70.656v-64z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M848.00512 324.096a208 208 0 1 1-416 0 208 208 0 0 1 416 0z m-64 0a144 144 0 1 0-288 0 144 144 0 0 0 288 0zM768.00512 678.336a760.448 760.448 0 0 0-448 59.84V864h448v64H288.00512A32 32 0 0 1 256.00512 896v-158.848c0-23.808 13.12-45.76 34.56-55.872A825.088 825.088 0 0 1 768.00512 613.44V678.4z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  );
};

IconUsergroupAdd.defaultProps = {
  size: 18,
};

IconUsergroupAdd = React.memo ? React.memo(IconUsergroupAdd) : IconUsergroupAdd;

export default IconUsergroupAdd;
