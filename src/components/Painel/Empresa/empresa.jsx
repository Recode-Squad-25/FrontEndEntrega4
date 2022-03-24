//import {    CalendarToday,    LocationSearching,    MailOutline,    PermIdentity,    PhoneAndroid,    Publish,  } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./empresa.css";


export default function Home() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Empresa</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://s2.glbimg.com/aPPFcq_RGl0Wd1K-6UiFZlJlUWs=/e.glbimg.com/og/ed/f/original/2021/06/10/bandeira_lgbt.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Colore</span>
              <span className="userShowUserTitle">Empresa De Desenvolvimento De Software</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da Empresa</span>
            <div className="userShowInfo">
              {// <PermIdentity className="userShowIcon" />
              }
              <span className="userShowInfoTitle">Colore</span>
            </div>
            <div className="userShowInfo">
              {//<CalendarToday className="userShowIcon" />
              }
              <span className="userShowInfoTitle">CNPJ: XXXX.XXXX.XXXX</span>
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
                <label>Nome Da Empresa</label>
                <input
                  type="text"
                  placeholder="Colore"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>CNPJ</label>
                <input
                  type="text"
                  placeholder="xxxx.xxxx.xxxx"
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
        <span className="userUpdateTitle">Vagas Abertas de sua empresa</span>


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
              <td>3500</td>
              <td>4</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Auxiliar de Operações</td>
              <td>2400</td>
              <td>5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Auxiliar Administrativo</td>
              <td>1400</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <button class="btn btn-success vagas-btn" type="submit"><a href="/cadastro">Criar Nova Vaga</a></button>



      </div>
    </div>
  );
}