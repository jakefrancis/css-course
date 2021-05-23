import React from "react";
import {useState} from 'react'
import NavLink from "./NavLink";



const Sidebar = () => {
  const [sideBarItems, setSideBarItems] = useState(
    [
      {
        iconName: "home",
        description: "Hotel",
        active: true,
        key: 1
      },
      {
        iconName: "aircraft-take-off",
        description: "Flight",
        active: false,
        key: 2
      },
      {
        iconName: "key",
        description: "Car Rental",
        active: false,
        key: 3
      },
      {
        iconName: "map",
        description: "Tours",
        active: false,
        key: 4
      }
    ]
  )

  const activeHandler = (id) => {
    console.log(id)
    const alteredItems = sideBarItems.map((item) => {
    
      if(item.key === id){
        item.active = true
      }
      else{
        item.active = false
      }
      
      return item
    })
    setSideBarItems(alteredItems)
  }

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {sideBarItems.map((item) => {
          return (
            <NavLink
              handler={() => {activeHandler(item.key)}}
              component="side-nav"
              iconName={item.iconName}
              description={item.description}
              href="#"
              key={item.key}
              index = {item.key}
              active={item.active}
            />
          );
        })}
      </ul>
      <div className="legal">&copy; 2017 by trillo, All rights reserved</div>
    </nav>
  );
};

export default Sidebar;
