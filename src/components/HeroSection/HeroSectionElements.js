import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 20% 20%;
    object-position: 20% 20%;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    margin-left: 700px;

    @media screen and (max-width: 1200px) {
        margin-left: 300px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
        margin-left: 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        margin-left: 0;
    }
`

export const HeroP = styled.p`
    margin-left: 700px;
    color: #fff;
    font-size: 24px;
    text-align: center;

    @media screen and (max-width: 1200px) {
        margin-left: 300px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        margin-left: 0;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin-left: 0;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    margin-left: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
        margin-left: 300px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
        font-size: 18px;
    }
`
