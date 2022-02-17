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

let IconShoucang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1004.16 382.528c-4.288-13.12-17.92-35.968-61.632-42.368l-173.632-25.216c-42.688-6.208-94.912-44.16-114.048-82.88L577.152 74.688c-19.52-39.552-45.504-45.44-59.264-45.44-13.824 0-39.808 5.888-59.328 45.44l-77.696 157.44C361.792 270.72 309.568 308.672 266.88 314.88l-173.632 25.216c-43.648 6.4-57.344 29.248-61.568 42.368-4.224 13.12-6.72 39.68 24.96 70.4l125.632 122.56c30.912 30.08 50.816 91.52 43.52 134.08l-29.632 172.928c-5.76 33.472 3.52 52.928 12.288 63.36 17.92 21.184 49.92 24.128 83.648 6.4l155.328-81.664c36.224-19.008 104.768-19.072 140.992 0l155.392 81.664c14.976 7.872 29.248 11.84 42.496 11.84a52.608 52.608 0 0 0 41.088-18.24c8.768-10.432 18.048-29.888 12.352-63.36l-29.696-172.928c-7.232-42.56 12.672-103.936 43.52-134.08L979.2 452.992c31.616-30.784 29.184-57.344 24.96-70.4z"
        fill={getIconColor(color, 0, '#F7B500')}
      />
    </Svg>
  );
};

IconShoucang.defaultProps = {
  size: 18,
};

IconShoucang = React.memo ? React.memo(IconShoucang) : IconShoucang;

export default IconShoucang;
