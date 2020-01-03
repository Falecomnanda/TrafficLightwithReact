import React from 'react';

class Semaforo extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'rojo',
        }
    }
    cambio = (color) => {
        this.setState({
            active: color
        })
    }
    render() {
        let classActiveRojo = ''
        if (this.state.active === 'rojo') classActiveRojo = 'rojoShine';

        let classActiveAmarillo = ''
        if (this.state.active === 'amarillo') classActiveAmarillo = 'amarilloShine';

        let classActiveVerde = ''
        if (this.state.active === 'verde') classActiveVerde = 'verdeShine';

        return (
            <div>
                <div className="semaforo">
                    <div className={"rojo " + classActiveRojo} onClick={() => this.cambio('rojo')}></div>

                    <div className={"amarillo " + classActiveAmarillo} onClick={() => this.cambio('amarillo')}></div>

                    <div className={"verde " + classActiveVerde} onClick={() => this.cambio('verde')}></div>
                </div>

            </div >
        )
    }
}

export default Semaforo;