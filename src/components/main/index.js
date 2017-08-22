import React, {Component,PropTypes} from "react";

import imgPlay from '../../images/ipc/jugar-ipc.png';
import imgPlayPopulation from '../../images/ipc/jugar-poblacion.png';
import BackgroundService from "../../services/background";

class main extends Component {
    propTypes = {
        onBack: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onPopulation: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        BackgroundService.setBackgroundImage(require('../../images/ipc/fondo.jpg'))
    }

    render() {
        const {onSubmit,onPopulation} = this.props;
        return (
            <div className="position-arrow">
                <img onClick={() => onPopulation()} src={imgPlayPopulation} alt="Jugar Poblacion"/>
                <img onClick={() => onSubmit()} src={imgPlay} alt="Jugar IPC"/>
            </div>
        )
    }
}
export default main;
