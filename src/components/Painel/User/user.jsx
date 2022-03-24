//import {    CalendarToday,    LocationSearching,    MailOutline,    PermIdentity,    PhoneAndroid,    Publish,  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";


export default function Home() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuário</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ronaldo</span>
              <span className="userShowUserTitle">Desenvolvedor Full-Stack</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da Conta</span>
            <div className="userShowInfo">
              {//<PermIdentity className="userShowIcon" /> 
              }
              <span className="userShowInfoTitle">Ronaldo G.</span>
            </div>
            <div className="userShowInfo">
              {//<CalendarToday className="userShowIcon" />
              }
              <span className="userShowInfoTitle">30.06.2000</span>
            </div>
            <span className="userShowTitle">Contato</span>
            <div className="userShowInfo">
              {//<PhoneAndroid className="userShowIcon" />
              }
              <span className="userShowInfoTitle">(11) 4002-8922</span>
            </div>
            <div className="userShowInfo">
              {//<MailOutline className="userShowIcon" />
              }
              <span className="userShowInfoTitle">user@email.com</span>
            </div>
            <div className="userShowInfo">
              {//<LocationSearching className="userShowIcon" />
              }
              <span className="userShowInfoTitle">São Paulo | Brazil</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Primeiro Nome</label>
                <input
                  type="text"
                  placeholder="nome"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Nome Completo</label>
                <input
                  type="text"
                  placeholder="seu nome"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="email@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input
                  type="text"
                  placeholder="(11) 4002-8922"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input
                  type="text"
                  placeholder="Rio de Janeiro, Brazil"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"
                  alt=""
                />
                <label htmlFor="file">
                  {//<Publish className="userUpdateIcon" />
                  }
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Atualizar</button>
            </div>
          </form>
        </div>







      </div>

      <div className="table">
        <span className="userUpdateTitle">Vagas que você está concorrendo:</span>


        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Vaga</th>
              <th>Salário</th>
              <th>Número De Candidatos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Desenvolvedor</td>
              <td>Compatibilidade: Alta</td>
              <td>Status: Aprovado(a)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Auxiliar de Operações</td>
              <td>Compatibilidade: Baixa</td>
              <td>Status: Reprovado(a)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Auxiliar Administrativo</td>
              <td>Compatibilidade: Média</td>
              <td>Status: Análise</td>
            </tr>
          </tbody>
        </table>
      </div>



    </div>
  );
}