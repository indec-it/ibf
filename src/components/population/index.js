import React, {Component, PropTypes} from "react";

import Container from '../Container';
import BackgroundService from "../../services/background";

import imgFinish from '../../images/ipc/finalizar.png';

class population extends Component {
    propTypes = {
        onBack: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onPopulation: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            back: false
        };
    }

    componentDidMount() {
        const {form} = this.props;

        if (form.age >= 0 && form.age <= 9) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA1C.jpg'));
        if (form.age >= 10 && form.age <= 19) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA2C.jpg'));
        if (form.age >= 20 && form.age <= 29) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA3C.jpg'));
        if (form.age >= 30 && form.age <= 39) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA4C.jpg'));
        if (form.age >= 40 && form.age <= 49) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA5C.jpg'));
        if (form.age >= 50 && form.age <= 59) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA6C.jpg'));
        if (form.age >= 60 && form.age <= 69) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA7C.jpg'));
        if (form.age >= 70 && form.age <= 79) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA8C.jpg'));
        if (form.age >= 80 && form.age <= 89) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA9C.jpg'));
        if (form.age >= 90 && form.age <= 99) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA10C.jpg'));
        if (form.age > 100) BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLA0.jpg'));
        console.log(this.props);
    }

    goContainer() {
        this.setState({back: true})
    }

    render() {
        const {back} = this.state;
        const {onSubmit, onBack, form} = this.props;
        return (
            <div>
                {!back &&
                <div>
                    <div className="text-center response">
                        <h3>¡Hola {form.name} !</h3>
                        <h3> De acuerdo a tu edad de {form.age} años</h3>
                        <h3> y para tu sexo {form.sex} , tu posiciòn en la piràmide es la siguiente:</h3>
                    </div>
                    < div className="position-arrow-finish">
                        <img onClick={() => this.goContainer()} src={imgFinish} alt="Finalizar"/>
                    </div>
                </div>
                }
                {back &&
                    <Container />
                }
            </div>
        )
    }
}
export default population;
