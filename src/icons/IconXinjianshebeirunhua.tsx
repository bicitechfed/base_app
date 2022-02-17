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

let IconXinjianshebeirunhua: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.057143 994.742857c23.405714 0 39.009524-15.60381 39.009524-39.009524v-77.970285L863.085714 877.714286c23.405714 0 39.009524-15.60381 39.009524-39.009524 0-23.405714-15.60381-39.009524-39.009524-39.009524l-78.019047 0.048762V721.67619c0-23.405714-15.60381-39.009524-39.009524-39.009523-23.405714 0-39.009524 15.60381-39.009524 39.009523v78.06781l-78.019048-0.048762c-23.405714 0-39.009524 15.60381-39.009523 39.009524 0 23.405714 15.60381 39.009524 39.009523 39.009524l78.019048 0.048762V955.733333c0 23.405714 15.60381 39.009524 39.009524 39.009524z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M327.92381 144.871619l531.797333 0.097524c29.744762 0 54.272 22.625524 57.197714 51.687619l0.341333 5.851428-0.048761 342.406096h-0.682667l0.195048 2.438095a31.695238 31.695238 0 0 1-27.014096 31.402667l-4.681143 0.341333a31.695238 31.695238 0 0 1-31.597714-34.133333h-0.487619V209.188571L327.728762 209.13981l-0.682667 0.146285-0.731428 0.487619-1.901715 1.560381-2.243047 1.560381L167.399619 367.664762l-3.705905 3.218286a2.29181 2.29181 0 0 0-0.926476 1.511619l0.048762 0.926476 0.926476 4.388571a31.792762 31.792762 0 0 1 0 8.533334l-0.877714 4.096-0.048762 569.344h349.135238c16.384 1.511619 29.305905 15.213714 29.305905 31.890285a31.695238 31.695238 0 0 1-27.014095 31.353905L512 1023.122286v0.828952L156.135619 1024a57.539048 57.539048 0 0 1-57.197714-51.687619l-0.292572-5.851429V381.903238l0.195048-3.267048-0.146286-1.609142a66.56 66.56 0 0 1 16.384-48.176762l5.36381-5.412572 2.486857-2.096762 157.988571-157.988571 1.901715-1.755429 1.950476-1.560381 3.705905-2.243047 5.851428-3.803429c6.095238-3.559619 12.678095-6.144 19.602286-7.606857l6.92419-1.121524 7.119238-0.390095zM777.654857 8.582095a25.35619 25.35619 0 0 1 25.356191 25.356191v61.293714a25.35619 25.35619 0 0 1-25.356191 25.404952H505.61219a25.35619 25.35619 0 0 1-25.35619-25.35619V33.938286a25.35619 25.35619 0 0 1 25.35619-25.404953h272.042667z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconXinjianshebeirunhua.defaultProps = {
  size: 18,
};

IconXinjianshebeirunhua = React.memo ? React.memo(IconXinjianshebeirunhua) : IconXinjianshebeirunhua;

export default IconXinjianshebeirunhua;
