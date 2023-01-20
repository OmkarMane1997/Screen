import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";
import PrintIcon from "@mui/icons-material/Receipt";
import DownloadIcon from "@mui/icons-material/GetApp";
import ViewColumnIcon from "@mui/icons-material/DynamicFeed";
import FilterIcon from "@mui/icons-material/FilterAlt";
import { Avatar, Button ,Stack,Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "../assets/Table.css";
import axios from 'axios';  
function TableData() {
  const [getData, setGetData] = useState();

  const TableData= async ()=>{
    try {
      const userData = await axios.get(`http://localhost:4000/api/v1/Read`);
        console.log(userData.data.result);
        setGetData(userData.data.result);
      } catch (err) {
        console.log(err);
      }
  }
  useEffect(() => {
    TableData();
  }, []);

  


  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
        console.log(tableMeta.rowData);
          const Name = tableMeta.rowData[0];
          const avatar = tableMeta.rowData[4];
          const email = tableMeta.rowData[5];
          return <>
          <Stack direction='row'  spacing={1}>
          <Avatar alt={Name} src={avatar} />
          <Stack  direction='column'  spacing={1}>
          <Typography variant="body2" align="center">{Name}</Typography>
          <Typography variant="body2" align="center">{email}</Typography>
          </Stack>
         
          </Stack>
         
         
          </>;
        },
      },
    },
    {
      name: "role",
      label: "ROLE",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastLogin",
      label: "LAST LOGIN",
      options: {
        filter: false,
        sort: false,
        customBodyRender:(value, tableMeta, updateValue)=>{
          const lastLogin =tableMeta.rowData[2];
          return <Typography variant="body2" align="center" className="lastLogin" >{lastLogin}</Typography>
        }
      },
    },
    {
      name: "twoStep",
      label: "TWO-STEP",
      options: {
        filter: false,
        sort: false,
        customBodyRender:(value, tableMeta, updateValue)=>{
          const twoStep = tableMeta.rowData[3];
          return twoStep===1? <Typography variant="body2" align="center" className="two_Enable" >Enabled</Typography>:''

        }
      },
    },
    {
      name: "avatar",
      label: "",
      options: {
        filter: false,
        sort: false,
       display:false
      },
    },
    {
      name: "email",
      label: "",
      options: {
        filter: false,
        sort: false,
       display:false
      },
    },
    {
      name: "created_date",
      label: "JOINED DATE",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "action",
      label: "ACTION",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
         
          return <Button variant="text"  className='action' size="small">Action</Button>
        },
      },
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
      <Button className="button_Background">
        <AddIcon />
        Add User
      </Button>
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
    responsive: "standard",
  };
  return (
    <>
      <MUIDataTable
        data={getData}
        columns={columns}
        options={options}
        components={components}
      />
    </>
  );
}

export default TableData;
