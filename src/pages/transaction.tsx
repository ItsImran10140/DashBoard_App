import { Column } from "react-table";
import AdminSideBar from "../components/AdminSideBar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Imran",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/sanjkvnk">Manage</Link>,
  },
  {
    user: "Sahil",
    amount: 6999,
    discount: 400,
    quantity: 6,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/sanjkvnk">Manage</Link>,
  },
  {
    user: "Alex",
    amount: 6999,
    discount: 400,
    quantity: 6,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/sanjkvnk">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transaction;
