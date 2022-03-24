import React from 'react';
import Linkedin from '../images/sobre/linkedin.svg'
import Github from '../images/sobre/github.svg'
import Instagram from '../images/sobre/instagram.svg'
import '../styles/sobre.css'

const SobreCard = (props) =>{
    return (
<div className="col-md-4">

    <div className="rounded social">
        <img src={props.FotoPessoa} className="img-fluid rounded-circle img-thumbnail " alt={"Foto de rosto de " + props.NomePessoa}/>
        <div className="dados">
            <h5 className="mb-0 ">{props.NomePessoa}</h5>
            <span className="small text-uppercase container-mae-spantext">Fundador e {props.funcao}</span>
        </div>
        <div className="align-items-center container-mae-icons">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href={props.Linkedin} className="social-link">
                        <img className="icon rounded-circle" src={Linkedin} alt="Linkedin logo" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href={props.Github} className="social-link">
                        <img className="icon rounded-circle" src={Github} alt="Github logo" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href={props.Instagram} className="social-link">
                        <img className="icon rounded-circle" src={Instagram} alt="Instagram logo" />
                    </a>
                </li>
            </ul>
        </div>
    </div>

</div>
    );
}
export default SobreCard;