import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees, vote } from "../store/slice";
import Card from "../components/card";
import Helmet from "../components/helmet";
import log from "../service/log";

const Home = () => {
  const employees = useSelector((state) => state.app.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
    log({ page: "Home", action: "Viewed" });
  }, []);

  return (
    <section>
      <Helmet title="EOM | Home" description="Employee Of the Month" />
      <div className="card-container">
        {employees?.map((employee) => {
          return <Card key={employee.id} employee={employee} vote={(e) => dispatch(vote(e))} />;
        })}
      </div>
    </section>
  );
};

export default Home;
