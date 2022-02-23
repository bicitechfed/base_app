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

let IconCloudUpload: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M302.72 400.832l-45.568 5.312C185.344 414.464 128 476.992 128 554.624c0 77.44 56.96 139.648 128 148.352v64.32c-107.328-8.896-192-100.864-192-212.608 0-109.76 81.28-199.936 185.792-212.16C276.032 219.52 383.552 128 512 128c128.448 0 235.968 91.456 262.208 214.528 104.576 12.16 185.792 102.4 185.792 212.16 0 111.744-84.672 203.712-192 212.608v-64.32c71.04-8.704 128-70.912 128-148.288 0-77.696-57.344-140.16-129.152-148.544l-45.632-5.312-9.6-44.928C691.392 261.184 609.024 192 512 192 414.976 192 332.608 261.12 312.32 355.904l-9.6 44.928z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M392.96 686.08l86.912-85.248 2.176 327.616 64.64-0.448-2.112-326.464 87.872 85.696 45.696-44.8-144.128-140.544a32 32 0 0 0-44.736 0l-142.08 139.52 45.824 44.672z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCloudUpload.defaultProps = {
  size: 18,
};

IconCloudUpload = React.memo ? React.memo(IconCloudUpload) : IconCloudUpload;

export default IconCloudUpload;
