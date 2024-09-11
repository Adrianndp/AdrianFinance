import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BasicChart from "./BasicChart";

interface NavbarProps {
  data: any;
  stockInfo: any;
}

export default function Navbar({ data, stockInfo }: NavbarProps) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Details" value="2" />
            <Tab label="Strategy" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <BasicChart data={data} />
          <pre>{JSON.stringify(stockInfo, null, 2)}</pre>
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
  );
}
