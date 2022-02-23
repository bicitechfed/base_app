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

let IconCloud: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M302.72 464.832l9.6-44.928C332.672 325.184 415.04 256 512 256s179.392 69.12 199.68 163.904l9.6 44.928 45.568 5.312C838.656 478.464 896 540.992 896 618.624 896 702.272 829.632 768 750.912 768H273.088C194.368 768 128 702.208 128 618.688c0-77.696 57.344-140.16 129.152-148.544l45.632-5.312z m471.488-58.24C747.968 283.392 640.448 192 512 192 383.552 192 276.032 283.456 249.792 406.528 145.216 418.688 64 508.928 64 618.688 64 736.32 157.76 832 273.088 832h477.824C866.24 832 960 736.32 960 618.688c0-109.76-81.28-199.936-185.792-212.16z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCloud.defaultProps = {
  size: 18,
};

IconCloud = React.memo ? React.memo(IconCloud) : IconCloud;

export default IconCloud;
