import React, {PropTypes, Component} from 'react';
import BackgroundService from '../../services/background';
import imgNext from '../../images/ipc/next.png';
import imgBack from '../../images/back-arrow.png';

class ipc extends Component {
    propTypes = {
        onBack: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        BackgroundService.setBackgroundImage(require('../../images/ipc/ipc-background-new.jpg'))
    }

    render() {
        const {onBack, onSubmit} = this.props;
        return (
            <div className="position-arrow-ipc">
                <img onClick={onBack} src={imgBack} alt="volver" border="0"/>
                <img onClick={onSubmit} src={imgNext} alt="seguir" border="0"/>
            </div>
        );
    };
}

export default ipc;
