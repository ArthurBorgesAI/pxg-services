import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

document.title = "Services do Hayatoh";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      locale={ptBR}
      theme={
        { token: {
          colorBgBody: "#000",
          colorBgHeader: "#000",
          colorBgContainer: "#000",
          colorText: "#ccc",
          colorTextLightSolid: "#ccc",
          colorBorderSecondary: "#FC2947",
        },
        components: {
          Layout: {
            colorBgHeader: "#000",
            colorBgBody: "#fff",
            colorBgTrigger: "#000"
          },
          Menu: {
            itemHoverBg: "#FC2947",
            itemSelectedBg: "#FC2947",
            itemSelectedColor: "#ccc",
            itemColor: "#ccc",
            itemBg: "#000"
          },
        }
      }
    }
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
