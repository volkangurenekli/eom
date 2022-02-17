import Link from "next/link";
import PropTypes from "prop-types";

const Card = ({ employee, vote }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="image">
          <img src={employee.imageURL} alt={`${employee.firstName} ${employee.lastName}`} />
        </div>

        <div className="name">
          <h1>{`${employee.firstName} ${employee.lastName}`}</h1>
          <h2>{employee.duty}</h2>
        </div>

        <div className="vote">{employee.vote}</div>

        <div className="options">
          <button className="red" onClick={() => vote({ employee, count: -1 })}>
            -
          </button>
          <button className="green" onClick={() => vote({ employee, count: 1 })}>
            +
          </button>
        </div>

        <br />
        <div>
          <Link href={`/detail/${employee.id}`}>
            <a className="link">Detail</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  employee: PropTypes.object.isRequired,
  vote: PropTypes.func.isRequired,
};

export default Card;
