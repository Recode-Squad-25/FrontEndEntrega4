import React, { Component } from 'react';
import VagasService from '../services/VagaService';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol
  } from 'mdbreact';


class CardVagasComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vagas: []
        }
        this.addVagasTravel= this.addVagas.bind(this);
        this.editVagasTravel= this.editVagas.bind(this);
        this.deleteVagasTravel= this.deleteVagas.bind(this);
    }

    deleteVagas(id){
        VagasService.deleteVagas(id).then( res => {
            this.setState({vagas: this.state.vagas.filter(vagas => vagas.id !== id)});
        });
    }
    viewVagas(id){
        this.props.history.push(`/view-package/${id}`);
    }
    editVagas(id){
        this.props.history.push(`/add-package/${id}`);
    }

    componentDidMount(){
        VagasService.getVagass().then((res) => {
            this.setState({vagas: res.data});
        });
    }

    addVagas(){
        this.props.history.push('/add-package/_add');
    }

    render() {
        return (
            <>
                {                    
                    this.state.vagas.map(
                        vagas => 
                        <MDBCol style={{ maxWidth: "22rem" }} key={vagas.id}>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://github.com/Recode-Squad-25/FrontEndEntrega4/blob/main/src/images/vagas/2.png" waves />
                            <MDBCardBody>
                            <MDBCardTitle>Titulo : {vagas.title}</MDBCardTitle>
                            <MDBCardText> Cargo : {vagas.cargo} - Salario: R$ {vagas.salario}</MDBCardText>
                            <MDBCardText> Beneficios: {vagas.beneficios} </MDBCardText>
                            <MDBBtn className="btn btn-info" onClick={() => this.viewVagas(vagas.id)}>Detalhes</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>                           
                    )}
            </>
        );
    }
}


export default CardVagasComponent;