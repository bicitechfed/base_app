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

let IconBaojingdengji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M424.082651 1024c-2.845458 0-4.961311-0.729605-6.34756-2.188814-9.922622-2.918418-13.497684-8.463413-10.652227-16.999786l65.956252-389.462914H185.720841c-7.077164 0-12.038475-2.845458-14.883933-8.536373-4.231706-5.617955-3.575062-11.965515 2.188813-19.11564L615.603848 8.755255c5.617955-8.463413 12.038475-9.849662 19.115639-4.231707 7.077164 1.459209 10.652227 7.150125 10.652227 16.999787l-65.956253 389.535874h253.245743c7.077164 0 12.038475 2.845458 14.883933 8.463413 1.459209 5.690916 1.459209 12.038475 0 19.1886L439.039544 1017.57948a20.428928 20.428928 0 0 1-14.956893 6.42052z"
        fill={getIconColor(color, 0, '#FA6400')}
      />
    </Svg>
  );
};

IconBaojingdengji.defaultProps = {
  size: 18,
};

IconBaojingdengji = React.memo ? React.memo(IconBaojingdengji) : IconBaojingdengji;

export default IconBaojingdengji;
