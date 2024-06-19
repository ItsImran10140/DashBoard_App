import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import BarChart from "./pages/charts/BarCharts";
import LineChart from "./pages/charts/LineCharts";
import PieChart from "./pages/charts/PieCharts";
import StopWatch from "./pages/apps/StopWatch";
import Coupon from "./pages/apps/Coupon";
import Toss from "./pages/apps/Toss";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Transaction = lazy(() => import("./pages/transaction"));
const Customers = lazy(() => import("./pages/customer"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/productManagement")
);
const TansactionManagement = lazy(
  () => import("./pages/management/transactionManagement")
);

const App = () => {
  77;
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  // border: "2px solid black",
                  display: "flex",
                  justifyContent: "center",
                  height: "95vh",
                  alignItems: "center",
                }}
              >
                <Link to={"/admin/dashboard"}>
                  {" "}
                  <h1 style={{ color: "black", fontSize: "100px" }}>
                    GO TO DASHBOARD
                  </h1>{" "}
                  <p
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    This is just a Frontend part of a Dashboard
                  </p>
                </Link>
              </div>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />
          <Route path="/admin/chart/Pie" element={<PieChart />} />

          {/* Apps*/}
          <Route path="/admin/app/stopwatch" element={<StopWatch />} />
          <Route path="/admin/app/coupon" element={<Coupon />} />
          <Route path="/admin/app/toss" element={<Toss />} />

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TansactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
