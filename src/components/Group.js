import { useState } from "react";
import {
  Link
} from "react-router-dom";

const DATA = [
  { groupId: 1, name: "수입꽃1", categoryName: "Income" },
  { groupId: 2, name: "수입꽃2", categoryName: "Income2" },
  { groupId: 3, name: "장미꽃", categoryName: "Rose" },
  { groupId: 4, name: "기타꽃1", categoryName: "etc1" },
  { groupId: 5, name: "기타꽃2", categoryName: "etc2" },
];

function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      className={`${isPressed && "active"}`}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  );
}

export default function Group() {
  const [filter, setFilter] = useState("수입꽃");

  return (
    <>
      <div className="Group-page">
        <ul className="group-wrap">
          {DATA.map((data) => (
            <li key={data.groupId} onClick={() => setFilter(data.name)}>
              <Link to={`/group/${data.groupId}`}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

{
  /* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/group/:groupId" element={<Group />} />
      </Routes>
        

    </Router> */
}
