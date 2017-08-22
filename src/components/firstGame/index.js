import React, {Component, PropTypes} from "react";
import {shuffle,forEach} from "lodash";

import Basket from "./Basket";
import Box from "./Box";

import BackgroundService from '../../services/background';

import baskets from "../../data/baskets";
import boxes from "../../data/boxes";

const imgInstruction = require('../../images/instructions/instructivo-coincidencias.png');
const imgPlay = require('../../images/instructions/play-coincidencias.png');
const imgNext =require('../../images/ipc/next.png');
const imgBack = require('../../images/back-arrow.png');
const imgFullBasket = require('../../images/full-basket.png');

class FirstGame extends Component {
    static propTypes = {
        onFinish: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            dustbins: shuffle(baskets),
            boxes: shuffle(boxes),
            droppedBoxNames: [],
            isFinished: false,
            count: 0,
            tutorial: true
        };
        forEach(boxes, index => {
            if(index.dragged === true){
                index.dragged = false;
            }
        })
    }

    componentDidMount() {
        BackgroundService.setBackgroundImage(require('../../images/background.jpg'))
    }

    handleDrop() {
        const {boxes, dragged} = this.state;
        boxes[dragged].dragged = true;
        this.setState({boxes, dragged: null, time: new Date()});
        if (boxes.every(box => box.dragged)) {
            this.setState({isFinished: true});
        }
    }

    startGame() {
        const {tutorial} = this.state;
        if (tutorial) {
            this.setState({tutorial: false});
        }
    }

    render() {
        const {boxes, dustbins, isFinished, tutorial} = this.state;
        const {onFinish, onBack} = this.props;
        console.log(boxes);
        return (
            <div className={`${tutorial ? 'tutorial' : ''}`}>
                {!isFinished &&
                <div>
                    <div id="baskets" className="baskets">
                        {dustbins.map(({type, lastDroppedItem, label}, index) =>
                            <Basket
                                key={index}
                                type={type}
                                label={label}
                                onDrop={() => this.handleDrop()}
                            />
                        )}
                    </div>
                    <div id="boxes" className="boxes">
                        {boxes.map((box, index) =>
                            <Box
                                key={box.name}
                                box={box}
                                onStart={box => this.setState({dragged: index})}
                            />
                        )}
                    </div>
                </div>}
                {tutorial && <div className="tutorial-foreground">
                    <img onClick={() => onBack()} src={imgBack} alt="Volver"/>
                    <img src={imgInstruction} alt="Tutorial"/>
                    <img onClick={() => this.startGame()} src={imgPlay} alt="Jugar"/>
                </div>}
                {isFinished && <div className="full-basket">
                    <img onClick={() => onBack()} src={imgBack} alt="Volver"/>
                    <img src={imgFullBasket} alt="Canasta LLena"/>
                    <img onClick={() => onFinish()} src={imgNext} alt="Seguir"/>
                </div>}
            </div>
        );
    }
}

export default FirstGame;
