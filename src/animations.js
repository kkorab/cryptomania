import { keyframes } from 'styled-components';

const showUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1
        transform: translateY(0px);
    }
`;

export { showUp };
