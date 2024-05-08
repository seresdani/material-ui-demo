import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { ExpandLess, ExpandMore, GitHub, Person } from "@mui/icons-material";
import { Fragment, useRef, useState } from "react";
import { themeOptions } from "../theme";
import styles from "./AppBar.module.css";

const pages = [
  {
    id: "dashboard",
    title: "Dashboard",
    items: [
      { id: "overview", title: "Overview" },
      { id: "analytics", title: "Analytics" },
      { id: "reports", title: "Reports" },
      { id: "projects", title: "Projects" },
    ],
  },
  {
    id: "products",
    title: "Products",
    items: [
      { id: "electronics", title: "Electronics" },
      { id: "books", title: "Books" },
      { id: "clothing", title: "Clothing" },
      { id: "home-appliances", title: "Home Appliances" },
    ],
  },
  {
    id: "maps",
    title: "Maps",
    items: [{ id: "google", title: "Google" }],
  },
  {
    id: "users",
    title: "Users",
    items: [],
  },
  {
    id: "posts",
    title: "Posts",
    items: [],
  },
  {
    id: "settings",
    title: "Settings",
    items: [
      { id: "profile", title: "Profile" },
      { id: "security", title: "Security" },
      { id: "notifications", title: "Notifications" },
      { id: "privacy", title: "Privacy" },
      { id: "billing", title: "Billing" },
      { id: "account", title: "Account" },
      { id: "support", title: "Support" },
      { id: "logout", title: "Logout" },
    ],
  },
];

const companyPages = [
  {
    id: "telemetry-insights",
    title: "Telemetry Insights",
    items: [
      { id: "recipes", title: "Recipes" },
      { id: "brews", title: "Brews" },
      { id: "consistency-report", title: "Consistency Report" },
      { id: "brew-compare-report", title: "Brew Compare Report" },
    ],
  },
  {
    id: "inventory",
    title: "Inventory",
    items: [
      { id: "waste-report", title: "Waste report" },
      { id: "menu-overview", title: "Menu overview" },
      { id: "pos-uploads-overview", title: "POS uploads overview" },
      { id: "production-report", title: "Production report" },
    ],
  },
  {
    id: "equipment",
    title: "Equipment",
    items: [{ id: "stations", title: "Stations" }],
  },
  {
    id: "radar",
    title: "Radar",
    items: [],
  },
  {
    id: "barista-onsights",
    title: "Barista Onsights",
    items: [],
  },
  {
    id: "tasks",
    title: "Tasks",
    items: [
      { id: "task-board", title: "Task Board" },
      { id: "task-management", title: "Task Management" },
      { id: "task-report", title: "Task Report" },
    ],
  },
];

export function ResponsiveAppBar() {
  const isMobile = useMediaQuery(themeOptions.breakpoints?.down?.("md") ?? "");

  return (
    <AppBar position="sticky" color="cropsterSecondary">
      <Container maxWidth={false} >
        <Toolbar disableGutters variant="regular">
          {isMobile ? <MobileToolbar /> : <DesktopToolbar />}
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function MobileToolbar() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 256 }} role="presentation">
          <Grid container direction="column">
            <Grid container item padding={2} alignItems="center">
              <Box className={styles.desktopIcon}>
                {/* <img src="/CropsterIconOnly.svg" alt="Cropster Logo" /> */}
                <GitHub color="action" />
              </Box>

              <Typography variant="h6">Company</Typography>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <List component="nav" sx={{ maxWidth: 360 }}>
                {pages.map(({ id, title, items }, index) => (
                  <MobileMenuItem
                    key={id}
                    title={title}
                    items={items.map((item) => item.title)}
                    defaultOpen={index === 0}
                  />
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
}

type MobileMenuItemProps = {
  title: string;
  items: string[];
  defaultOpen?: boolean;
};

function MobileMenuItem({
  title,
  items,
  defaultOpen = false,
}: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <ListItemButton onClick={toggleMenu}>
        <ListItemText primary={title} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen}>
        <List component="div" disablePadding>
          {items.map((item) => (
            <ListItemButton key={item} sx={{ pl: 8 }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ variant: "body2" }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Fragment>
  );
}

function DesktopToolbar() {
  return (
    <Fragment>
      <Box className={styles.desktopIcon}>
        {/* <img src="/CropsterIconOnly.svg" alt="Cropster Logo" /> */}
        <GitHub />
      </Box>

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {pages.map(({ id, title, items }) => (
          <NavBarMenu
            key={id}
            title={title}
            items={items.map(({ title }) => title)}
          />
        ))}
      </Box>
    </Fragment>
  );
}

function NavBarMenu({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const element = useRef<HTMLButtonElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <Button
        aria-owns={element.current ? "simple-menu" : undefined}
        aria-haspopup="true"
        ref={element}
        sx={{ color: "white" }}
        onClick={handleOpenMenu}
      >
        {title}
      </Button>

      {items.length > 0 && (
        <Menu
          sx={{ mt: "16px" }}
          id="simple-menu"
          anchorEl={element.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={isOpen}
          onClose={handleCloseMenu}
        >
          {items.map((item) => (
            <MenuItem key={item} onClick={handleCloseMenu}>
              <Typography>{item}</Typography>
            </MenuItem>
          ))}
        </Menu>
      )}
    </Fragment>
  );
}

function Profile() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Person sx={{ color: "white" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "16px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {["Profile", "Account", "Dashboard", "Logout"].map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
