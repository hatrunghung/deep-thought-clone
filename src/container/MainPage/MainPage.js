import React, { Component } from 'react';
import styled from 'styled-components';
import {Media, Player, controls} from 'react-media-player';
const {PlayPause, MuteUnmute} = controls;

const Container = styled.div`
    display: block;
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
`

const H1 = styled.h1`
    font-size: 100px;
`

const Intro = styled.div`
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    width: 100%;
    height: 100%;
`

const Credit = styled.div`
    display: block;
    text-align: left;
    text-transform: uppercase;
    font-weight: 500;
    margin-left: 8px;
`

const Palette = styled.div`
    display: block;
    flex: 1 1 auto;
`

let bgColors = {
    "blue": '#0773bc',
    "cyan": '#00ccd3',
    "green": '#a6ec73',
    "white": '#fcfce4',
    "red": '#f8634f',
    "burgundy": '#703a48',
    "black": '#393742'
}

export default class MainPage extends Component {
    static propTypes = {};

    render() {
        return (
            <Container>
                <Intro>
                    <H1>Deep Thought</H1>
                    <p>DEEP THOUGHTS IS A BIMONTHLY ANIMATION SERIES BY MEDIAMONKS.
                    <br/>
                    THE SERIES EXPLORES A DIFFERENT THEME EACH EPISODE.
                    </p>
                </Intro>
                <Media>
                    <div className="media">
                        <div className="media-player">
                            <Player src="https://vimeo.com/184365780" 
                                width='1368px'
                                height='756px'/>
                        </div>
                        <div className="media-controls">
                            <PlayPause />
                            <MuteUnmute />
                        </div>
                    </div>
                </Media>
                <Credit>
                    <h2>#1:Fear</h2>
                    <i>nouns</i>
                    <ol>
                        <li>An unpleasant emotion caused by the threat of danger, pain, or harm</li>
                    </ol>
                    <p>
                        <b>ANIMATOR</b>
                    </p>
                    <ul>
                        <li>Yan Jamacaru <br/></li>
                        <li>Sunil Sital <br/></li>
                        <li>Chris Cookson <br/></li>
                        <li>Ben Alcasas <br/></li>
                        <li>Tom Kamps <br/></li>
                        <li>Ilia Kole <br/></li>
                        <li>Guy Brüggemann <br/></li>
                        <li>Pablo Cuello <br/></li>
                        <li>Patrick Brem <br/></li>
                        <li>Declan Byrne <br/></li>
                        <li>Michiel Schellekens <br/></li>
                        <li>Juan Behrens</li>
                    </ul>
                    <p>
                        <b>SOUND DESIGN</b>
                    </p>
                    <ul>
                        <li>Edward Björner</li>
                    </ul>
                </Credit>
                <Palette>
                    <span style={{backgroundColor: bgColors.blue}}/>
                    <span style={{backgroundColor: bgColors.cyan}}/>
                    <span style={{backgroundColor: bgColors.green}}/>
                    <span style={{backgroundColor: bgColors.white}}/>
                    <span style={{backgroundColor: bgColors.red}}/>
                    <span style={{backgroundColor: bgColors.burgundy}}/>
                    <span style={{backgroundColor: bgColors.black}}/>
                </Palette>
            </Container>
        );
    }
}
