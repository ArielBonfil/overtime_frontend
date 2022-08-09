import React from "react";
import styles from "./inlineDropDownMenu.module.scss";
import { DownOutlined } from '@ant-design/icons';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
export function InlineDropDownMenu() {
  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }
  
  const items = [
    getItem('Inicio', 'inicio'),
    getItem('Torneos 2022', 't2022', [
      getItem('Libre Superior', 'libresuperior', [getItem('Superior A apertura', 'superioraapertura'), getItem('Superior A clausura', 'superioraclausura')]),
      getItem('Senior', 'senior', [getItem('Senior A apertura', 'superioraapertura'), getItem('Senior A clausura', 'senioraclausura')]),
      getItem('Libre desarrollo', 'libredesarrollo'),
    ]),
    getItem('Galeria', 'galeria'),
    getItem('Inscribite', 'inscribite'),
    getItem('Contacto', 'contacto'),
    getItem('Palmares', 'palmares'),
    getItem('Torneos Archivados', 'torneosarchivados'),
  ];
  const onClick = (e) => {
    console.log('click ', e);
  };
    return(
      <div className={styles.inlineDropDownMenuContainer}>
            <Menu
      onClick={onClick}
      style={{
        width: 256,
    }
      }
      mode="inline"
      theme="light"
      items={items}
    />
      </div>
    )
}

export default InlineDropDownMenu;
