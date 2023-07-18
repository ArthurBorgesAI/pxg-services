import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ExperimentOutlined,
  RiseOutlined,
  SkinOutlined,
  CrownOutlined
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menuItems = [
  getItem(<Link to="/home">Home</Link>, "1", <HomeOutlined />),
  getItem(<Link to="/materias">Materia</Link>, "2", <RiseOutlined />),
  getItem(<Link to="/chemicals">Chemical</Link>, "3", <ExperimentOutlined />),
  getItem("Estilista", "sub1", <CrownOutlined />, [
    getItem(<Link to="/EstilistaS">Rank S</Link>, "4"),
    getItem(<Link to="/EstilistaA">Rank A</Link>, "5"),
    getItem(<Link to="/EstilistaB">Rank B</Link>, "6"),
  ]),
  getItem(<Link to="/Tailoring">Tailoring Addons</Link>, "7", <SkinOutlined />),
];

export default menuItems;
