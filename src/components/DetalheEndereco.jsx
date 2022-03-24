import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';

export const DetalheEndereco = () => {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhe Endereço</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> CEP: </label>
                            <div> { this.state.endereco.cep}</div>
                        </div>
                        <div className = "row">
                            <label> Rua: </label>
                            <div> { this.state.endereco.rua}</div>
                        </div>
                        <div className = "row">
                            <label> Número: </label>
                            <div> { this.state.endereco.numero}</div>
                        </div>
                        <div className = "row">
                            <label> Complemento: </label>
                            <div> { this.state.endereco.complemento}</div>
                        </div>
                        <div className = "row">
                            <label> Bairro: </label>
                            <div> { this.state.endereco.bairro}</div>
                        </div>
                        <div className = "row">
                            <label> Cidade: </label>
                            <div> { this.state.endereco.cidade}</div>
                        </div>
                        <div className = "row">
                            <label> UF: </label>
                            <div> { this.state.endereco.uf}</div>
                        </div>
                        <div className = "row">
                            <label> País: </label>
                            <div> { this.state.endereco.pais}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }