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

let IconEdit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M696.896 173.248l207.552 207.552 45.248-45.248L742.144 128zM150.976 949.312l231.232-46.208 467.072-467.072-207.616-207.552-467.008 467.008-46.272 231.232a19.2 19.2 0 0 0 22.592 22.592z m490.688-630.336l117.12 117.12-408.128 408.064-146.368 29.248 29.312-146.368 408.064-408.064z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconEdit.defaultProps = {
  size: 18,
};

IconEdit = React.memo ? React.memo(IconEdit) : IconEdit;

export default IconEdit;
