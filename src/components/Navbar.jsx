import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const settings = ["Profile", "Dashboard", "Settings", "Logout"];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <div className="relative bg-slate-50 dark:bg-black dark:text-white shadow ">
        {/* Desktop */}
        <section className="hidden lg:flex mx-28 p-4  justify-between items-center">
          <div className="items-center gap-4 flex">
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="My Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div className="shadow bg-gray-200 rounded-full flex items-center gap-">
                    <KeyboardArrowDownIcon />
                    <Avatar
                      alt="Remy Sharp"
                      className=""
                      src=""
                      sx={{ bgcolor: "#5B91D0" }}
                    />
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
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
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
          </div>
          <nav className="hidden md:block space-x-6 text-lg font-semibold text-[#2d2e32] text-end">
            <h1 className="font-cairoBold text-2xl text-[#5B91D0]">مرحبا بك</h1>
            <h3 className="font-cairoRegular">كل شيء تجده هنا</h3>
          </nav>
        </section>
        {/* Mobile */}
        <section className="flex lg:hidden mx-4 p-4   items-center justify-between">
          <div>
            <h1 className="text-xl font-cairoBold cursor-pointer">شعار</h1>
          </div>
          <div className="flex items-center ">
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="My Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <div className="flex items-center ">
                    <Avatar
                      alt="me"
                      className=""
                      src=""
                      sx={{ bgcolor: "#5B91D0" }}
                    />
                  </div>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
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
            <div>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Navbar;
