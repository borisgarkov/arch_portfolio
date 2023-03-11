import styled from "@emotion/styled";

const MainContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 32px;
    padding: 0 20px;
    width: 100%;
    position: relative;
    overflow: hidden;
    
    @media (min-width: 1200px) {
        margin-top: 80px;
        padding: 0 80px;
    }
`

const BoxContainer = styled.div`
    background-image: url("/aboutme/backgroundImage.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
`

export {
    MainContainer,
    BoxContainer
};