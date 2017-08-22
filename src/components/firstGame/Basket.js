import React, {Component, PropTypes} from "react";
import $ from "jquery";

class Basket extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onDrop: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            count: 0
            };
    }

    componentDidMount() {
        const {type, onDrop} = this.props;
        const {basket} = this.refs;

        $(basket).droppable({
            accept: `.${type}`,
            activate: () => {
                this.setState({activated: true});
            },
            drop: () => {
                this.setState({full: true, activated: false});
                onDrop();
            },
            over: () => {
                const {count} = this.state;
                this.setState({isOver: true, count: count + 1});
            },
            out: () => {
                this.setState({isOver: false});
            }
        });
    }

    renderImg(full, type, isOver, count) {
        let srcImg = require('../../images/basket-empty.png');
        let width = 98;
        let height = 125;
        if (full) {
            srcImg = require(`../../images/basket/${type}.png`);
        } else if (isOver) {
            width = 105;
            height = 130;
        } else if (count > 10) {
            width = 125;
            height = 140;
            srcImg = require('../../images/dancing-food.gif');
        }
        return <img src={srcImg} width={width} height={height} alt={type}/>
    }

    render() {
        const {label, type} = this.props;
        const {full, isOver, count} = this.state;

        return (
            <div ref="basket" className="row basket">
                {this.renderImg(full, type, isOver, count)}
                <p>{label}</p>
            </div>
        );
    }
}

export default Basket;
