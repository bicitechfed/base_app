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

let IconFilePdf: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 896V128h302.976v256.832h256V480h64V365.056a64 64 0 0 0-18.368-44.8L628.032 83.2A64 64 0 0 0 582.4 64H255.68C225.28 64 192 85.568 192 123.008v777.984c0 37.44 33.28 59.008 63.68 59.008h495.296v-64H256z m515.52-575.168H622.976V169.344l148.544 151.488z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M568.128 576h119.104c30.976 0 56 25.088 56 56v142.784a56 56 0 0 1-56 56H568.128V576z m48 48v158.784h71.104a8 8 0 0 0 8-8V632a8 8 0 0 0-8-8H616.128zM352 576.384h119.104c30.976 0 56 25.088 56 56v67.328a56 56 0 0 1-56 56H400v76.16H352V576.384z m48 131.328h71.104a8 8 0 0 0 8-8V632.32a8 8 0 0 0-8-8H400v83.328zM784.256 831.872h48v-101.184h103.104v-48h-103.104V624h103.104V576h-151.104z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFilePdf.defaultProps = {
  size: 18,
};

IconFilePdf = React.memo ? React.memo(IconFilePdf) : IconFilePdf;

export default IconFilePdf;
