import React from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheCurriculo = () => {
            return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes Curriculo</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome: </label>
                            <div> { this.state.curriculo.nome }</div>
                        </div>
                        <div className = "row">
                            <label> Sobrenome: </label>
                            <div> { this.state.curriculo.sobrenome }</div>
                        </div>
                        <div className = "row">
                            <label> Nome Social: </label>
                            <div> { this.state.curriculo.nomeSocial }</div>
                        </div>
                        <div className = "row">
                            <label> Orientaçãoo Sexual: </label>
                            <div> { this.state.curriculo.orientacaoSexual }</div>
                        </div>
                        <div className = "row">
                            <label> Identidade de Gênero: </label>
                            <div> { this.state.curriculo.identidadeGenero }</div>
                        </div>
                        <div className = "row">
                            <label> Telefone: </label>
                            <div> { this.state.curriculo.telefone }</div>
                        </div>
                        <div className = "row">
                            <label> CPF: </label>
                            <div> { this.state.curriculo.cpf }</div>
                        </div>
                        <div className = "row">
                            <label> RG: </label>
                            <div> { this.state.curriculo.rg }</div>
                        </div>
                        <div className = "row">
                            <label> Data Nascimento: </label>
                            <div> { this.state.curriculo.dataNascimento }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }