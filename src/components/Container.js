import React, {Component} from "react";
import Main from '../components/main';
import IpcGame from "./ipcGame";
import FirstGame from "./firstGame";
import SecondGame from "./secondGame";
import PopulationForm from './populationForm';
import Population from './population';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {step: 0};
    }

    nextStep() {
        const {step} = this.state;
        this.setState({step: step + 1});
    }

    backStep() {
        const {step} = this.state;
        if (step === 11 || step === 3) {
            this.setState({step: 0});
        }
        else {
            this.setState({step: step - 1});
        }
        console.log('este es mi container', this.state);
    }

    goPopulation() {
        this.setState({step: 10});
    }

    goMain() {
        this.setState({step: 0});
    }

    render() {
        const {step} = this.state;
        switch (step) {
            case 0:
                return <Main onSubmit={() => this.nextStep()} onPopulation={() => this.goPopulation()}/>;
            case 1:
                return <IpcGame onBack={() => this.backStep()} onSubmit={() => this.nextStep()}/>;
            case 2:
                return <FirstGame onFinish={() => this.nextStep()} onBack={() => this.backStep()}/>;
            case 3:
                return <SecondGame onFinish={() => this.nextStep()} onBack={() => this.backStep()}/>;
            case 10:
                return <PopulationForm onBack={() => this.backStep()} onSubmit={() => this.nextStep()}/>;
            case 11:
                return <Population onBack={() => this.backStep()}/>;
            default:
                throw new Error(`Step not recognized: ${step}`);
        }
    }
}
