import React, {Component, PropTypes} from 'react';
import $ from 'jquery';

class Box extends Component {
    static propTypes = {
        box: PropTypes.shape({
            name: PropTypes.string.isRequired,
            dragged: PropTypes.bool
        }).isRequired,
        onStart: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {box, onStart} = this.props;
        const {draggable} = this.refs;
        $(draggable).draggable({
            revert: true,
            start: () => {
                onStart(box);
            }
        });
    }

    render() {
        const {box: {name, dragged}} = this.props;
        const backgroundImage = 'url(' + require(`../../images/${dragged ? 'check' : 'box'}/${name}.png`) + ')';
        return (
            <div style={{backgroundImage}} className="box">
                {!dragged && <img
                    ref="draggable" src={require(`../../images/alone/${name}.png`)} alt={name}
                    style={{position: 'relative', top: 0, left: 0}} className={name}
                />}
            </div>
        );
    }
}

export default Box;
