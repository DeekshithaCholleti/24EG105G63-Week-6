import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // view employee
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  // edit employee
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  // delete employee
  const deleteEmployee = async (email) => {
    try {
      setLoading(true);

      let res = await axios.delete(
        `http://localhost:4000/emp-api/employees/${email}`
      );

      if (res.status === 200) {
        getEmps(); // refresh list
      }
    } catch (err) {
      console.log("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // get all employees
  async function getEmps() {
    try {
      setLoading(true);
      let res = await axios.get(
        "http://localhost:4000/emp-api/employees"
      );

      if (res.status === 200) {
        setEmps(res.data.payload);
      }
    } catch (err) {
      console.log("Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>

      {/* Loading */}
      {loading && <p className="text-center text-blue-600">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white p-5 text-center text-2xl rounded-2xl shadow-lg"
          >
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>

            <div className="flex gap-2 justify-center">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-green-600 p-2 rounded-xl text-white"
              >
                View
              </button>

              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-600 p-2 rounded-xl text-white"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmployee(empObj.email)}
                className="bg-red-600 p-2 rounded-xl text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;