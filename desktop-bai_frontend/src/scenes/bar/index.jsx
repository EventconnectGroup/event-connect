import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import { Navbar } from "../../components";


const Bar = () => {
  return (
    <div>
      <Navbar />
      <Box m="20px" className="pt-14">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
       <BarChart />
      </Box>
      </Box>
      </div>
  );
};

export default Bar;
