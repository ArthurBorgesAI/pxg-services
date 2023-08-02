import styled from "styled-components";

export const P = styled.p`
    margin: 24px;
    color: #ccc;
`;

export const Img = styled.img`
    width: 7rem;
    margin:2rem 0 3rem 0;
    &:hover{
        animation: shake 2s;
    }

    @keyframes shake {
        0% { transform: scale(1.05); }
        10% { transform: scale(1.0); }
        20% { transform: scale(1.05); }
        30% { transform: scale(1.0); }
        40% { transform: scale(1.05); }
        50% { transform: scale(1.0); }
        60% { transform: scale(1.05); }
        70% { transform: scale(1.0); }
        80% { transform: scale(1.05);}
        90% { transform: scale(1.0);}
        100% { transform: scale(1.0); }
    }
`;


