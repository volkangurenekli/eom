import Link from "next/link";
import PropTypes from "prop-types";

const Info = ({ employee }) => {
  return (
    <div className="info-container">
      <div className="info">
        <div className="img-container">
          <img src={employee.imageURL} alt={`${employee.firstName} ${employee.lastName}`} />
        </div>
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
              </tr>
              <tr>
                <td>Duty</td>
                <td>{employee.duty}</td>
              </tr>
              <tr>
                <td>Mail</td>
                <td>{employee.email}</td>
              </tr>
              <tr>
                <td>Adress</td>
                <td>{employee.adress}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{employee.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="back">
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

Info.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default Info;
