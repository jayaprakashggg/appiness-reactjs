import * as React from "react";
import { withRouter } from "react-router-dom";
import "./DashBoardPage.scss";
import DashBoardData from "../../mock-data/DashBoardData.json";

/**
 * @function HomePage
 * @summary Renders the home page component
 */
export function HomePage(props) {
  return (
    <React.Fragment>
      <header className="cus-header">
        <h4>Appiness - Dashboard</h4>
      </header>
      <div className="container">
        <div className="row display-flex">
          {DashBoardData.user &&
            DashBoardData.user.map((data, index) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                  <div className="card m-5-px panel panel-default">
                    <div className="card-body item">
                      <h5 className="card-title">
                        <strong>User ID - #{data.id}</strong>
                      </h5>
                    </div>
                    <div className="m-l-r-20">
                      <div>
                        Name: <strong>{data.name}</strong>
                      </div>
                      <div>
                        Age: <strong>{data.age}</strong>
                      </div>
                      <div>
                        Gender: <strong>{data.gender}</strong>
                      </div>
                      <div>
                        Email Id: <strong>{data.email}</strong>
                      </div>
                      <div>
                        Phone No: <strong>{data.phone}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(HomePage);
