import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const BarContainer = styled.div`
    width: 100%;
    height: 40px;
    background: green;
    font-size: 1.5em;
    color: white;
    display: flex;
    align-items: center;
    padding: 5px 10px;
`;

const NavBar = () => {
    return (
        <Navbar bg="primary" expand="lg">
            <BarContainer>
                <Navbar.Brand class="text-white">Stock Ticker Query</Navbar.Brand>
            </BarContainer>
        </Navbar>
    );
};

export default NavBar;