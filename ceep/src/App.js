import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import { Component } from 'react';


export class App extends Component {
    
    constructor() {
        super();
        this.notas = [];
        this.state = {
            notas:this.notas
        }; 
    }

    criarNota(titulo, texto) {
        const novaNota = {titulo, texto};
        const novoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas:novoArrayNotas
        }
        this.setState(novoEstado)
    }

    render() {
        return (
            <section>
                <FormularioCadastro 
                  criarNota={this.criarNota.bind(this)}
                />
                <ListaDeNotas notas={this.state.notas}/>
            </section>
        );
    }
  
}

export default App;
