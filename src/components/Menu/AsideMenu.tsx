import React from 'react';
import { Menu } from 'antd';
import { menu } from '@/mock';
import { listToTree } from '@/utils';

const menuList = listToTree(menu.data.menus || []) 
const renderChildMenu = (item: any )=> {
  if(item.type === 0 && item.children.length) {
    return <Menu.SubMenu key={item.id} title={item.name}>{item.children.sort((a:any,b:any) => a.orderNum - b.orderNum).map((child:any) => renderChildMenu(child))}</Menu.SubMenu>
  }else {
   return <Menu.Item key={item.id}>{item.name}</Menu.Item>
  }
}
console.log('menus', menuList);

const ASideMenu:React.FC = () => {
   return (
    <div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            // items={menuItem}
          >
            {
             menuList && menuList.sort((a,b) => a.orderNum - b.orderNum).map(item => renderChildMenu(item))
            }
          </Menu>
        </div>
   )
}
export default ASideMenu
