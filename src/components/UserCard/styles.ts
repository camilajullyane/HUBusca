import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: 400px;
    background-color: #ddd;
    margin: 50px auto;
    border-radius: 10px;

    /* @media (max-width: 300px) {
        max-width: 100%;
        height: auto;
        margin: 20px auto;
    } */
`


export const Image = styled.img `
    width: 60%;
    height: 60%;
    margin: auto;
    display: block;
    padding: 30px;

    /* @media (max-width: 300px) {
        width: 80%;
        height: auto;
        padding: 10px;
    } */
`