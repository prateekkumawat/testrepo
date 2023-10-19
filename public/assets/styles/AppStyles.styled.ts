import { createGlobalStyle } from 'styled-components';
import button from './button.styled';
import styles from './styles.styled';
import utilities from './utilities.styled';
const AppGlobalStyle = createGlobalStyle`
    ${button}
    ${styles}
    ${utilities}
`;
export default AppGlobalStyle;
