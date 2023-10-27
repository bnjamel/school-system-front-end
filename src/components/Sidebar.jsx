import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 220;

export default function Sidebar() {
  return (
    <section className="hidden lg:flex">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <div className="bg-[#5B91D0] h-[100vh]">
          <section
            dir="rtl"
            className="hidden lg:flex p-4  justify-center items-center "
          >
            <div className="items-center flex">
              <nav className="hidden md:block text-lg font-semibold text-[#2d2e32] ">
                <h1 className="font-cairoBold text-2xl text-[#fff]">مدرسة</h1>
                <h3 className="font-cairoRegular text-white">جرير النموذجية</h3>
              </nav>
            </div>
          </section>

          <div dir="rtl" className="text-white justify-center flex ">
            <List className="">
              {[
                "الصفحة الرئيسية",
                "الأساتذة",
                "الطلاب",
                "الصفوف",
                "الجدول الأسبوعي",
                "الخطة السنوية",
                "التبليغات",
                "الاعدادات",
                "الملف الشخصي",
              ].map((text) => (
                // disablePadding
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      dir="rtl"
                      className="text-start"
                      primary={text}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <button className="border p-2 font-cairoRegular">
                تسجيل خروج
              </button>
            </List>
          </div>
        </div>
      </Drawer>
    </section>
  );
}
