import React, {Component, PropTypes} from "react";
import Population from '../../components/population';

import BackgroundService from "../../services/background";

import imgPlay from '../../images/ipc/jugar.png';

class populationForm extends Component {
    propTypes = {
        onBack: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onPopulation: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            next: true,
            name: '',
            age: 0,
            sex: ''
        }
        ;
    }

    componentDidMount() {
        BackgroundService.setBackgroundImage(require('../../images/ipc/FONDOPOBLALIMPIO.jpg'))
    }

    nextGame() {
        const {next} = this.state;
        this.setState({next: false})
    }

    Date() {
        const {name,age,sex} = this.state;
        this.setState({name: document.getElementById('nombre').value});
        this.setState({age: document.getElementById('edad').value});
        this.setState({sex: document.getElementById('sexo').value});
        console.log(this.state);
    }
    executeFunction (){
        this.Date();
        this.nextGame();
}
    render() {
        const {onSubmit,onBack} = this.props;
        const {next} = this.state;
        return (
            <div>
                {next &&
                <div id="formu" className="text-center">
                    <p>La pir&aacute;mide de poblaci&oacute;n muestra la cantidad de personas que pertenece a cada rango
                        de edad seg&uacute;n
                        sexo en la Argentina. </p>

                    <p>Ingres&aacute; tus datos, mir&aacute; en qu&eacute; posici&oacute;n de la pir&aacute;mide
                        est&aacute;s y conoc&eacute;
                        cu&aacute;ntas personas de tu edad y sexo hay en la poblaci&oacute;n total.</p>

                    <br/>
                    <form name="rellenar" action="#">
                        <h2>Escribe tus datos:</h2>
                        <table>
                            <tr>
                                <td><p> tu nombre : </p></td>
                                <td><input name="nombre" id="nombre" type="text"/></td>
                            </tr>
                            <tr>
                                <td><p> tu edad : </p></td>
                                <td><input name="edad" id="edad" type="number"/></td>
                            </tr>
                            <tr>
                                <td><p> tu sexo : </p></td>
                                <td><input name="sexo" id="sexo" type="text"/></td>
                            </tr>
                        </table>
                        <br/>
                        <img onClick={() => this.executeFunction()} className="jugarForm" src={imgPlay} alt="Jugar"/>
                    </form>
                </div>}
                {!next &&
                <Population onBack={() => onBack()} onSubmit="" onPopulation="" form={this.state}/>
                }
            </div>
        )
    }
}
export default populationForm;
