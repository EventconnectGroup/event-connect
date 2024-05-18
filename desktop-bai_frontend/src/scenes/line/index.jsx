import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { Navbar } from "../../components";

const Line = () => {
  return (
    <div>
    <Navbar />
    <Box m="20px" className="pt-14">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
      </Box>
      </div>
  );
};

export default Line;
