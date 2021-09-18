import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";

const SideBarLinks = () => {
  return (
    <List>
      <ListItem button component={Link} to="/electronics">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Electronics" />
      </ListItem>
      <ListItem button component={Link} to="/jewelry">
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Jewelry" />
      </ListItem>
      <ListItem button component={Link} to="/mens-clothing">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Men's clothing" />
      </ListItem>
      <ListItem button component={Link} to="/womens-clothing">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Women's clothing" />
      </ListItem>
    </List>
  );
};

export default SideBarLinks;
