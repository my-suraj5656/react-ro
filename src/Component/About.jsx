import React from "react";
import { Link, Outlet } from "react-router-dom";
import Company from "./Company";
import Others from "./Others";
import Channel from "./Channel";

const About = () => {
  return (
    <>
    <h1>About</h1>
    <ul>
      <li>
        <Link to="company" element={<Company/>}>Company</Link>
      </li>
       <li>
        <Link to="others" element={<Others/>}>Others</Link>
      </li>
       <li>
        <Link to="channel" element={<Channel/>}>Channel</Link>
      </li>
    </ul>
    <Outlet/>
    </>
  );
};

export default About;
export const array = [
    {
        id: 1,
        name: "foo",
        city: "dallas",
        category: "one",
        type: "A",
        active: "FALSE",
    },
    {
        id: 2,
        name: "bar",
        city: "dallas",
        color: "black",
        category: "one",
        type: "B",
        active: "FALSE",
    },
    {
        id: 3,
        name: "jim",
        city: "san francisco",
        color: "black",
        category: "one",
        type: "B",
        active: "TRUE",
    },
    {
        id: 4,
        name: "jane",
        city: "denver",
        color: "black",
        category: "two",
        type: "C",
        active: "FALSE",
    },
];
import React from "react";

const DynamicTable = ({ data }) => {
  if (!data) {
    return null;
  }
  //   console.log(data);

  const heading = [];
  data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!heading.includes(key)) {
        heading.push(key);
      }
    });
  });
  //   console.log(heading);

  return (
    <>
      {data ? (
        <table>
          <thead>
            <tr>
              {heading.map((item, i) => {
                return <th key={i}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowi) => {
              return (
                <tr key={rowi}>
                  {heading.map((key, coli) => {
                    return <td key={coli}>{item[key] ? item[key] : "-"}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default DynamicTable;import React, { useContext, useState } from "react";
import { Togglecontext } from "./Table";

const Switcher1 = ({ val, category }) => {
  const handleswitchchange = useContext(Togglecontext);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const ischeck = !isChecked;
    setIsChecked(ischeck);
    if (handleswitchchange) {
      handleswitchchange(val, category, ischeck);
    }
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`block h-6 w-12 rounded-full transition-colors ${
              isChecked ? "bg-blue-500" : "bg-[#E5E7EB]"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-all ${
              isChecked ? "transform translate-x-6" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switcher1;
table {
  width: 75vw;
  text-align: center;
  border-collapse: collapse;
  margin: 20px auto;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
import React, { createContext, useEffect, useState } from "react";
import "./table.css";
import DynamicTable from "./Dynamictable";
import Tooglecontainer from "./Togglecontainer";
import { gettoggleobj } from "../utils/toggleobj.js";
import { array } from "../api/api.js";

export const Togglecontext = createContext();
const Table = () => {
  const [data, setdata] = useState();
  const [togglearray, settogglearray] = useState();
  console.log(data);

  const handleswitchchange = (val, category, ischecked) => {
    console.log(val, category, ischecked);

    // const filterobj = [];

    // const filtercopydata = JSON.parse(JSON.stringify(array));
    // filtercopydata.forEach((item) => {
    //   if (item[category] === val) {
    //     item.ischeck = ischecked;
    //     filterobj.push(item);
    //   }
    // });

    // console.log(filterobj);
  };

  const key = Object.keys(togglearray ? togglearray : "");
  const value = Object.values(togglearray ? togglearray : "");

  useEffect(() => {
    setdata(array);
  }, []);

  useEffect(() => {
    const accdata = gettoggleobj(data);
    settogglearray(accdata);
  }, [data]);

  return (
    <>
      <Togglecontext.Provider value={handleswitchchange}>
        <Tooglecontainer toggleKeys={key} toggleValues={value} />
      </Togglecontext.Provider>
      <DynamicTable data={data} />
    </>
  );
};

export default Table;
.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 75vw;
  margin: 20px auto;
}
.categoryname {
  list-style: none;
}

.category {
  display: flex;
  width: 200px;
  padding: 5px;
  gap: 5px;
}

.toggledata {
  display: flex;
  gap: 5px;
  margin-bottom: 8px;
}
import React from "react";
import Switcher1 from "./switcher";
import "./toggle.css";
const Tooglecontainer = ({ toggleKeys, toggleValues }) => {
  if (!toggleKeys || !toggleValues) {
    return <></>;
  }

  return (
    <div className="container">
      {toggleKeys?.map((item, rowi) => {
        return (
          <div key={rowi} className="category">
            <div className="categoryname">{item}</div>
            <div className="categorydata">
              {toggleValues[rowi]?.map((val, i) => {
                return (
                  <label key={i} className="toggledata">
                    <Switcher1 val={val} category={item} />
                    {val}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tooglecontainer;

export function gettoggleobj(data) {

    return data?.reduce((acc, obj) => {
        let keys = ["id", "name"];

        Object.keys(obj).forEach((key) => {
            if (!keys.includes(key)) {
                if (!acc[key]) {
                    acc[key] = [];
                }

                let value = obj[key].toLowerCase();
                if (!acc[key].includes(value.toLowerCase())) {
                    acc[key].push(value);
                }
            }
        });

        return acc;
    }, {});
}
