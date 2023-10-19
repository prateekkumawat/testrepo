import { css } from 'styled-components';

const styles = css`
  /***********************************/
  .component-header {
    margin-bottom: 15px;
    &.border-bottom {
      border-bottom: 2px solid ${(props) => props.theme.primary.main} !important;
      padding-bottom: 5px;
    }
  }
  /***********************************/
  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: none;
    &.border {
      border: 1px solid #0000004d !important;
    }

    .card-header {
      padding: 20px 20px 0;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      //   &.border-bottom {
      //       border-bottom: 1px solid #3E3E3E !important;
      //       padding-bottom: 20px;
      //   }

      &.border-bottom {
        border-bottom: 2px solid ${(props) => props.theme.primary.main} !important;
        padding-bottom: 6px;
      }
    }

    .card-body {
      padding: 20px;
    }

    &.v2 {
      border: 1px solid rgba(0, 0, 0, 0.3);
      box-shadow: none;
      border-radius: 15px;
      overflow: hidden;
      .card-header {
        background: #ededed;
        padding: 10px 20px;
        border-bottom: 1px solid #ededed;
      }
    }
  }
  /***********************************/
  .template-heights {
    box-shadow: none;
    height: 100%;
  }
`;

export default styles;
