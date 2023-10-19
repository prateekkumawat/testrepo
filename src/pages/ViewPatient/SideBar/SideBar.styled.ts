import { styled } from 'styled-components';

export const ViewPatientSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 110px;
  flex-shrink: 0;
  margin-left: -20px;
  .profile-image {
    width: 120px;
    /* height: 120px; */
    border-radius: 100%;
    margin-bottom: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .sidebar-list-wrapper {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-right: none;
    .sidebar-list:first-child {
      border-top: none;
    }
    .sidebar-list:last-child {
      border-bottom: none;
    }
  }
  .sidebar-list {
    width: 100%;
    // height: 80px;
    place-content: center;
    border-right: none;
    border-top: none;
    border-bottom: 1px solid grey;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #f0f0f0;
    }
    &.active {
      background-color: ${(props) => props.theme.primary.main} !important;
      color: white;
      article {
        color: white;
      }
    }
    .list-icon {
      padding-bottom: 5px;
      height: 60%;
    }
    .name {
      font-size: 12px;
      align-items: center;
      text-align: center;
      width: 80%;
      font-weight: 600;
      flex-wrap: wrap;
      margin: auto;
    }
  }
`;
