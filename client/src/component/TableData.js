import React from "react";
import MUIDataTable from "mui-datatables";
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";
import PrintIcon from "@mui/icons-material/Receipt";
import DownloadIcon from "@mui/icons-material/GetApp";
import ViewColumnIcon from "@mui/icons-material/DynamicFeed";
import FilterIcon from "@mui/icons-material/FilterAlt";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "../assets/Table.css";

function TableData() {
  const columns = [
    {
      name: "name",
      label: "Name",
     
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          const firstName = tableMeta.rowData[0];
          const lastName = tableMeta.rowData[3];
          return `${firstName} ${lastName}`;
      }
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const firstName = 'Action';
          return `${firstName}`;
      }
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "Omkar Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const components = {
    icons: {
      SearchIcon,
      PrintIcon,
      DownloadIcon,
      ViewColumnIcon,
      FilterIcon,
    },
  };

  const HeaderElements = () => (
    <>
      <Button className="button_Background"><AddIcon />Add User</Button>
    </>
  );

  const options = {
    filterType: "dropdown",
    print: false,
    viewColumns: false,
    searchOpen: true,
    searchPlaceholder: " Search User",
    customToolbar: () => (
      <>
        <HeaderElements />
      </>
    ),
    toolbar: {
      search: "o",
      downloadCsv: "Download CSV",
      print: "Print",
      viewColumns: "View Columns",
      filterTable: "Filter Table",
    },
    responsive: 'standard',
  };
  return (
    <>
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
        components={components}
      />
    </>
  );
}

export default TableData;
