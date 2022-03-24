import { Link } from "react-router-dom";
import "./sidebar.css";

//import {    PermIdentity,    Storefront,  } from "@material-ui/icons";



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/User" className="link">
              <li className="sidebarListItem active">
                {//<PermIdentity className="sidebarIcon" />
                }Painel De Usuário
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">

          <ul className="sidebarList">

            <Link to="/empresa" className="link">
              <li className="sidebarListItem">
                {//<Storefront className="sidebarIcon" />
                }Painel De Empresa
              </li>
            </Link>

          </ul>
        </div>


      </div>
    </div>
  );
}