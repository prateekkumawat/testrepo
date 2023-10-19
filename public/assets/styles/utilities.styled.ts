import { css } from 'styled-components';

const utilities = css`
  .title {
    margin: 0;
    font-size: 18px;
    color: ${(props) => props.theme.text_dark};
    font-family: ${(props) => props.theme.font_sb};
    white-space: nowrap;
    &.sm {
      font-size: 16px;
    }
    &.lg {
      font-size: 24px;
    }
    &.xl {
      font-size: 28px;
    }
    &.xxl {
      font-size: 32px;
    }
  }

  .text {
    margin: 0;
    font-size: 14px;
    color: ${(props) => props.theme.text_dark};
    font-family: ${(props) => props.theme.font_r};
  }
  /***********************************/
  .font-r {
    font-family: ${(props) => props.theme.font_r};
  }
  .font-m {
    font-family: ${(props) => props.theme.font_m};
  }
  .font-sb {
    font-family: ${(props) => props.theme.font_sb};
  }
  .font-b {
    font-family: ${(props) => props.theme.font_b};
  }
  /***********************************/
  .clr-text-light {
    color: ${(props) => props.theme.text_light};
  }

  .clr-text-primary {
    color: ${(props) => props.theme.text_primary};
  }

  .clr-text-secondary {
    color: ${(props) => props.theme.text_secondary};
  }
  /***********************************/
  .bg-gray-100 {
    background: #f4f6f8;
  }
  .bg-gray-200 {
    background: rgba(0, 0, 0, 0.07);
  }
  /********************************/
  /* @each $clrname, $clrval in $app-colors {
  .bg-#{$clrname} {
    background: $clrval;
  }
} */
  /********************************/
  .fs-20 {
    font-size: 20px;
  }
`;
export default utilities;
