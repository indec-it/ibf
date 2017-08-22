import React, {Component} from "react";
import {shuffle, forEach} from "lodash";

import Podium from "./Podium";
import Basket from "./Basket";

import BackgroundService from "../../services/background";

import boxes from "../../data/boxes";
import podiums from "../../data/podium"

const imgFinalised = require('../../images/instructions/ok-coincidencias.png');
const imgInstruction = require('../../images/instructions/instructivo-podio.png');
const imgPlay = require('../../images/instructions/play-coincidencias.png');
const imgFinalisedButton = require('../../images/finish.png');
const imgBack = require('../../images/back-arrow.png');

class SecondGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            podiums: podiums,
            baskets: shuffle(boxes),
            droppedBoxNames: [],
            isFinished: false,
            count: 0,
            tutorial: true,
            isDropped: 0
        };
        const {baskets} = this.state;
        forEach(baskets,index => {
            index.dragged = false;
        });
    }

    componentDidMount() {
        BackgroundService.setBackgroundImage(require('../../images/background-podio.jpg'))
    }

    handleDrop() {
        const {baskets, dragged, podiums} = this.state;
        baskets[dragged].dragged = true;
        this.setState({baskets, dragged: null, podiums, dropped: null, time: new Date()});
        if (dragged >= 0) {
            this.setState({isDropped: this.state.isDropped + 1});
            if (this.state.isDropped === 3) {
                this.setState({isFinished: true});
                this.setState({tutorial: true})
            }
            console.log('este es count del dropped : ' + this.state.isDropped);
        }
    }

    startGame(e) {
        const {tutorial} = this.state;
        if (tutorial) {
            this.setState({tutorial: false});
        }
    }

    renderTutorial(tutorial, isFinished) {
        const {onBack}= this.props;
        console.log('este es el props mean' , this.props);
        if (tutorial === isFinished) {
            return null;
        }
        return (
            <div className="tutorialSecond-foreground">
                <img onClick={() => onBack()} src={imgBack} alt="Volver" />
                <img src={imgInstruction} alt="Tutorial"/>
                <img onClick={e => this.startGame(e)} src={imgPlay} alt="Finalizar"/>
            </div>
        );
    }

    render() {
        const {baskets, podiums, isFinished, tutorial} = this.state;
        const {onBack} = this.props;
        return (
            <div className={`${tutorial ? 'tutorial' : ''}`}>
                {<div id="baskets-second-game" className="baskets-second-game">
                    {baskets.map((basket, index) =>
                        <Basket
                            key={basket.name}
                            box={basket}
                            onStart={box => this.setState({dragged: index})}
                        />
                    )}
                </div>}
                {this.renderTutorial(tutorial, isFinished)}
                {isFinished && <div className="finish">
                    <img src={imgFinalised} alt="Finalizado"/>
                    <img onClick={() => onBack()} src={imgFinalisedButton} alt="Finalizado"/>
                </div>}
                <div id="podiums" className="podiums">
                    {podiums.map(({type, position}, index) =>
                        <Podium
                            key={index}
                            type={type}
                            position={position}
                            onDrop={() => this.handleDrop()}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default SecondGame;
