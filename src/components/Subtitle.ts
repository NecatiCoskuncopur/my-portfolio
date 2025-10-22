import styled from 'styled-components';

import theme from '@/theme';

const { colors, typography } = theme;

const Subtitle = styled.h3`
  line-height: 1.2;
  font-size: ${typography.fontSizes.$5};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.leather};
  margin-bottom: 54px;
`;

export default Subtitle;
