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

import { ExpandLess, ExpandMore, Person } from "@mui/icons-material";
import { Fragment, useRef, useState } from "react";
import { themeOptions } from "../theme";
import styles from "./AppBar.module.css";

const pages = [
  "Telemetry insights",
  "Inventory",
  "Equipment",
  "Radar",
  "Barista onsights",
  "Tasks",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function ResponsiveAppBar() {
  const isMobile = useMediaQuery(themeOptions.breakpoints?.down?.("md") ?? "");

  return (
    <AppBar position="sticky" color="cropsterSecondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="regular">
          {isMobile ? <MobileToolbar /> : <DesktopToolbar />}
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

type State = {
  drawer: boolean;
  telemetryInsights: boolean;
  inventory: boolean;
  equipment: boolean;
  tasks: boolean;
};

function MobileToolbar() {
  const [state, setState] = useState<State>({
    drawer: false,
    telemetryInsights: true,
    inventory: false,
    equipment: false,
    tasks: false,
  });

  const handleClick = (item: Partial<State>) => {
    setState((prev) => ({ ...prev, ...item }));
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState((prev) => ({ ...prev, drawer: open }));
    };

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor={"left"} open={state.drawer} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 256 }} role="presentation">
          <Grid container direction="column">
            <Grid container item padding={2}>
              <Box className={styles.desktopIcon}>
                <img src="/CropsterIconOnly.svg" alt="Cropster Logo" />
              </Box>

              <Typography variant="h6">Cropster</Typography>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <List
                component="nav"
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItemButton
                  onClick={() =>
                    handleClick({ telemetryInsights: !state.telemetryInsights })
                  }
                >
                  <ListItemText primary="Telemetry Insights" />
                  {state.telemetryInsights ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={state.telemetryInsights}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Recipes"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Brews"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Consistency Report"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Brew Compare Report"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton
                  onClick={() => handleClick({ inventory: !state.inventory })}
                >
                  <ListItemText primary="Inventory" />
                  {state.inventory ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={state.inventory}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Waste report"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Menu overview"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="POS uploads overview"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Production report"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton
                  onClick={() => handleClick({ equipment: !state.equipment })}
                >
                  <ListItemText primary="Equipment" />
                  {state.equipment ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={state.equipment}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Stations"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>

                <ListItemButton>
                  <ListItemText primary="Radar" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText primary="Barista onsights" />
                </ListItemButton>

                <ListItemButton
                  onClick={() => handleClick({ tasks: !state.tasks })}
                >
                  <ListItemText primary="Tasks" />
                  {state.tasks ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={state.tasks}>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Task board"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Task management"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 8 }}>
                      <ListItemText
                        primary="Task report"
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
}

function DesktopToolbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Fragment>
      <Box className={styles.desktopIcon}>
        <img src="/CropsterIconOnly.svg" alt="Cropster Logo" />
      </Box>

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <NavBarMenu
          title="Telemetry insights"
          items={[
            "Recipes",
            "Brews",
            "Consistency report",
            "Brew compare report",
          ]}
        />

        <NavBarMenu
          title="Inventory"
          items={[
            "Waste report",
            "Menu overview",
            "POS uploads overview",
            "Production report",
          ]}
        />

        <NavBarMenu title="Equipment" items={["Stations"]} />

        <NavBarMenu title="Radar" items={[]} />

        <NavBarMenu title="Barista onsights" items={[]} />

        <NavBarMenu
          title="Tasks"
          items={["Task board", "Task management", "Task report"]}
        />
      </Box>
    </Fragment>
  );
}

function NavBarMenu({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setOpen] = useState(false);

  const element = useRef<HTMLButtonElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
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
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
