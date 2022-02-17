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

let IconChakanxiangqing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M102.154892 102.154892h714.892704v204.245938h102.154893v-204.309785A102.154892 102.154892 0 0 0 817.047596 0H102.154892A102.154892 102.154892 0 0 0 0 102.154892v765.97015a102.154892 102.154892 0 0 0 102.154892 102.154893h306.40083v-102.154893h-306.464677V102.154892zM255.38723 255.38723a51.077446 51.077446 0 0 0 0 102.091046h408.491875a51.077446 51.077446 0 0 0 0-102.154893H255.323383z m153.168492 204.245938h-153.232339a51.077446 51.077446 0 0 0 0 102.154892h153.232339a51.077446 51.077446 0 0 0 0-102.154892z m597.989199 474.38178l-78.659267-78.659267a255.38723 255.38723 0 1 0-72.529973 72.529973l78.659267 78.659267a51.268986 51.268986 0 1 0 72.529973-72.529973z m-444.820708-219.058397a153.232338 153.232338 0 1 1 306.464676 0 153.232338 153.232338 0 0 1-306.464676 0z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconChakanxiangqing.defaultProps = {
  size: 18,
};

IconChakanxiangqing = React.memo ? React.memo(IconChakanxiangqing) : IconChakanxiangqing;

export default IconChakanxiangqing;
