import { BsSearch } from "react-icons/bs";
import AdminSideBar from "../components/AdminSideBar";
import { FaRegBell } from "react-icons/fa";

import userImg from "../assets/userpic.png";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, user, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
