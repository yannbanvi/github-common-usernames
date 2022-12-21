import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { GITHUB_FOLLOWERS_ROUTE, HOME_ROUTE } from "./pages/routesUtil";

function App() {
  return (
    <div className="App">
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <span className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="#">
          Github Followers
        </span>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className={({isActive}) => isActive? "nav-link active": "nav-link"} to={HOME_ROUTE}>
                    <span data-feather="home"></span>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({isActive}) => isActive? "nav-link active": "nav-link"} to={GITHUB_FOLLOWERS_ROUTE}>
                    <span data-feather="file"></span>
                    Github followers
                  </NavLink>
                </li>
              </ul>

              
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            

              <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
