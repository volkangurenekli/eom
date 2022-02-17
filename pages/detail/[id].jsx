import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getEmployee } from "../../store/slice";
import Info from "../../components/info";
import Helmet from "../../components/helmet";
import log from "../../service/log";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const employee = useSelector((state) => state.app.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee(id));
    log({ page: "Detail", action: "Viewed" });
  }, [id]);

  return (
    <section>
      <Helmet title="EOM | Detail" description="Detail Of Employee" />

      {employee ? (
        <Info employee={employee} />
      ) : (
        <div className="no-employee">
          <p>
            There is no selected employee. Please select a employee by clicking{" "}
            <Link href="/"> here</Link>
          </p>
        </div>
      )}
    </section>
  );
};

export default Detail;
