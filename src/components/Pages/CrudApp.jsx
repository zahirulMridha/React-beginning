import { useState } from "react";
import shortid from "shortid";
import Create from "../Crud/Create/Create";
import GetlItem from "../Crud/GetlItem/GetlItem";
import Read from "../Crud/Read/Read";
import Layout from "../Layout/Layouut";

function CrudApp() {
  const [data, setData] = useState([]);
  // for create list collected
  const stateLifting = (name) => {
    const obj = {
      name,
      id: shortid.generate(),
      createAt: new Date(),
      status: "all",
    };
    setData([obj, ...data]);
  };
  // for delete id get
  const del = (id) => {
    const obj = data.filter((v) => v.id !== id);
    setData(obj);
  };
  // for update
  const up = (id) => {
    let obj = data.filter((v) => v.id === id);
    obj[0].status = "completed";
    setData([...data]);
  };
  // for filter
  const filterName = data.filter((v) => v.status === "completed");
  console.log(data);
  return (
    <Layout>
      <h1>CRUD Operation</h1>
      <Create stateLifting={stateLifting} />
      <div className="crudApp">
        <div>
          <Read data={data} btn="All list" text="See all list" />
          <Read
            data={filterName}
            btn="Update list"
            text="See completed lists"
          />
        </div>
        <div>
          <GetlItem
            lifting={del}
            placeholder="Enter id for delete"
            text="Delete"
          />
          <GetlItem
            lifting={up}
            placeholder="Enter id for update"
            text="Update"
          />
        </div>
      </div>
    </Layout>
  );
}
export default CrudApp;
