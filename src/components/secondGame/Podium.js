import React, {Component, PropTypes} from "react";
import $ from "jquery";

class Podium extends Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        onDrop: PropTypes.func.isRequired
    };

    static defaultProps = {
        type: '',
        position: ''
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

    renderImg(full, type, count, position) {
        let srcImg = require(`../../images/podium/${type}.png`);
        if (full) {
            srcImg = require(`../../images/alone-big/${type}.png`);
        } else if (count > 10) {

            srcImg = require('../../images/sonic.gif');
        }
        return <img src={srcImg} alt={type} className={position} />;
    }

    render() {
        const {type, position} = this.props;
        const {full, count} = this.state;
        return (
            <div ref="basket" className="row podium">
                {this.renderImg(full, type, count, position)}
            </div>
        );
    }
}

export default Podium;
