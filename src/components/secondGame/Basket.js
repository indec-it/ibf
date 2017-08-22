import React, {Component, PropTypes} from 'react';
import $ from 'jquery';

class Basket extends Component {
    static propTypes = {
        box: PropTypes.shape({
            name: PropTypes.string.isRequired,
            dragged: PropTypes.bool,
            start: PropTypes.bool
        }).isRequired,
        onStart: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            startDragging: false
        };
    }

    componentDidMount() {
        const {box, onStart} = this.props;
        const {draggable} = this.refs;
        console.log(this.refs);
        $(draggable).draggable({
            revert: true,
            start: () => {
                onStart(box);
                this.setState({startDragging: true});
            },
            stop: () => {
                this.setState({startDragging: false});
            }
        });
    }

    render() {
        const {box: {name, dragged}} = this.props;
        const {startDragging} = this.state;
        const backgroundImage = 'url(' + require(`../../images/basket-empty/${name}.png`) + ')';
        console.log(this.props);
        return (
            <div style={{backgroundImage}} className="basket">
                {!dragged && <img
                    ref="draggable" src={require(`../../images/${startDragging ? 'alone' : 'basket-full'}/${name}.png`)}
                    alt={name} style={{position: 'relative', top: 0, left: 0}} className={name}
                />}
            </div>
        );
    }
}

export default Basket;
