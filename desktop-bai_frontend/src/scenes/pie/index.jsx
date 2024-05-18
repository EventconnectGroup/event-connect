import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import { Navbar } from "../../components";

const Pie = () => {
  return (
    <div>
      <Navbar />
    <Box m="20px" className="pt-14">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
      </Box>
      </div>
  );
};

export default Pie;
