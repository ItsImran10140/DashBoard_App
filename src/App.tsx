import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import BarChart from "./pages/charts/BarCharts";
import LineChart from "./pages/charts/LineCharts";
import PieChart from "./pages/charts/PieCharts";

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
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />
          <Route path="/admin/chart/Pie" element={<PieChart />} />

          {/* Apps*/}

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
