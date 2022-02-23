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

let IconLogoCodepen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M96.896 343.936a31.872 31.872 0 0 0-13.696 30.528v247.808a31.872 31.872 0 0 0 13.696 30.528l395.84 270.72a32 32 0 0 0 36.096 0l395.904-270.72a31.808 31.808 0 0 0 13.76-29.696V373.696a31.808 31.808 0 0 0-13.76-29.76l-395.904-270.72a32 32 0 0 0-36.096 0l-395.84 270.72z m57.728 26.432l328.96-225.024v190.08L293.568 465.408 154.624 370.368z m383.36-34.944v-190.08l328.96 225.024-138.88 95.04-190.08-129.92zM245.376 498.368L137.6 572.16V424.64l107.776 73.728z m638.72-73.792V572.16l-107.904-73.792 107.904-73.792z m-156.096 106.752l139.008 95.04-328.96 225.024v-190.08l189.952-129.92z m-244.416 129.92v190.144l-328.96-225.024 138.944-95.04 190.08 129.92z m196.288-162.88L510.72 614.016 341.76 498.368 510.72 382.784l169.088 115.584z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoCodepen.defaultProps = {
  size: 18,
};

IconLogoCodepen = React.memo ? React.memo(IconLogoCodepen) : IconLogoCodepen;

export default IconLogoCodepen;
