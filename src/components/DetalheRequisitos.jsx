import React, { Component } from 'react';
import { useEffect, useState } from "react";
import api from '../services/api';


export const DetalheRequisitos = () => {
    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> Detalhes requisitos</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Área Atuação: </label>
                        <div> {this.state.requisitos.areaAtuacao}</div>
                    </div>
                    <div className="row">
                        <label> Cargo: </label>
                        <div> {this.state.requisitos.cargo}</div>
                    </div>
                    <div className="row">
                        <label> Tempo Experiencia: </label>
                        <div> {this.state.requisitos.tempoExperiencia}</div>
                    </div>
                    <div className="row">
                        <label> Escolaridade: </label>
                        <div> {this.state.requisitos.escolaridade}</div>
                    </div>
                    <div className="row">
                        <label> Habilidades: </label>
                        <div> {this.state.requisitos.habilidades}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}