import React from 'react';
import styled from 'styled-components';

import banner from '../../image/banner.png';

const StyledBanner = styled.div`
    background-image: url(${banner});
    background-position: center;
    background-size: cover;
    height: 200px;
`;

export const Banner = () => (
    <StyledBanner/>
);