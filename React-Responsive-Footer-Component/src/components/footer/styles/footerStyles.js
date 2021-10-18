import styled from "styled-components";

export const Container = styled.div`
    padding: 80px 60px;
    background-color:rgb(87,65,217);

`;


export const Wrapper = styled.div`
    /* background-color:wheat; */
    display:flex;
    flex-direction: column;
    justify-content:center;
    max-width: 1200px;
    margin:0 auto;
`;

export const Row = styled.div`
    /* background-color:white; */
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(230px, 1fr));
    grid-gap:20px;

    @media (max-width:1000px){
        grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const Coloumn = styled.div`
    /* background-color:violet; */
    display:flex;
    flex-direction:column;
    text-align: left;
    margin-left:60px;
`;

export const Link = styled.a`
    color:#fff;
    margin-bottom:16px;
    font-size: 18px;
    text-decoration: none;
    cursor:pointer;

    &:hover {
        color:wheat;
        transition: 200ms ease-in-out;
    }
`;

export const Title = styled.p`
    font-size:25px;
    color:plum;
    margin-bottom:20px;
    font-weight:bold;
   
`;

export const Logo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align: center;
    margin-left:20px;
    /* background-color:skyblue; */
`;

export const LogoText = styled.h1`
    font-size:40px;
    color:white;
`;
export const Logofrst = styled.span`
    font-size:45px;
    color:black;
`;

export const Logosmall = styled.small`
    position:relative;
    top:-40px;
    letter-spacing: 5px;
    font-weight: bolder;
    font-size:24px;
`;

