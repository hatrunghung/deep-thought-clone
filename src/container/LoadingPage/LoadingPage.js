import React, { Component } from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';

const Container = styled.div`
    display: inline-block;
    position: relative;
    height: 100vh;
    font-size: 40px;
    color: rgba(128, 128, 128, 0.5);
`;

const FlowText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    color: black;
`;

export default class LoadingPage extends Component {
    static propTypes = {};

    render() {
        const textStyle = {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
        }

        return (
            <Container>
                <h2>Credit for</h2>
                <h1>Deep Thought</h1>
                <FlowText>
                    <Motion 
                        defaultStyle={{width: 0}}
                        style={{width: spring(100, {stiffness: 42, damping: 11}) }}>
                        {({ width }) => 
                            <h2 style={{
                                ...textStyle, 
                                width: `${width}%`
                            }}>Credit for</h2>
                        }
                    </Motion>
                    <Motion 
                        defaultStyle={{width: 0}}
                        style={{width: spring(100, {stiffness: 42, damping: 11}) }}>
                        {({ width }) => 
                            <h1 style={{
                                ...textStyle, 
                                width: `${width}%`
                            }}>Deep Thought</h1>
                        }
                    </Motion>
                </FlowText>
            </Container>
        );
    }
}
