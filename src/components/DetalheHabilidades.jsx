import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheHabilidades = () =>{
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes Habilidades</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Tipo: </label>
                            <div> { this.state.habilidades.tipo }</div>
                        </div>
                        <div className = "row">
                            <label> Nome Habilidade: </label>
                            <div> { this.state.habilidades.nome }</div>
                        </div>
                        <div className = "row">
                            <label> Nível: </label>
                            <div> { this.state.habilidades.nivel }</div>
                        </div>
                        <div className = "row">
                            <label> Tempo de duração: </label>
                            <div> { this.state.habilidades.tempo }</div>
                        </div>
                        <div className = "row">
                            <label> Certificado: </label>
                            <div> { this.state.habilidades.caminhoImagemComprovante }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }