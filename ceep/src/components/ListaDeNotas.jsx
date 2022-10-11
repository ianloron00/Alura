import React, { Component } from 'react'
import CardNota from './CardNota';

export default class ListaDeNotas extends Component {
    
    constructor() {
        super();
        this.notas = [];
    }

    render(props) {
        return (
            <ul>
            {
                this.props.notas
                .map( (nota, index) => {
                        return (
                            <li key={index}>
                                <CardNota 
                                    titulo={nota.titulo} 
                                    texto={nota.texto} 
                                />
                            </li>
                        );
                    }
                )
            }
            </ul>

        );
    }
}