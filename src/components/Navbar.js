import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faThumbtack,
  faLayerGroup,
  faCalendar,
  faClipboardCheck,
  faFolderPlus,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={`${toggle ? classes.main_contineractive : classes.main_continer}`}>
      <div className={classes.nav_item_con}>
        <div className={classes.side_menu_toggle}>
          <div
            className={`${toggle ? classes.toggle_btn : classes.toggle_btn_active}`}
            onClick={() => setToggle((prev) => !prev)}
          >
            <div className={classes.toggle_btn_icon}></div>
            {/* {toggle ? <div></div> : <div></div>} */}
          </div>
        </div>
      </div>

      <div className={classes.nav_item2_con}>
        <div className={classes.nav_items}>
          <a className={classes.nav_items_a} href="#about" key={"#about"}>
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>Home</p>
            </div>
          </a>
        </div>
        <div className={classes.nav_items}>
          <a className={classes.nav_items_a} href="#skills" key={"#skills"}>
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faThumbtack} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>My Tasks</p>
            </div>
          </a>
        </div>
        <div className={classes.nav_items}>
          <a
            className={classes.nav_items_a}
            href="#education"
            key={"#education"}
          >
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faLayerGroup} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>Categories</p>
            </div>
          </a>
        </div>
        <div className={classes.nav_items}>
          <a
            className={classes.nav_items_a}
            href="#education"
            key={"#education"}
          >
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>Calendar View</p>
            </div>
          </a>
        </div>
        <div className={classes.nav_items}>
          <a
            className={classes.nav_items_a}
            href="#education"
            key={"#education"}
          >
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faClipboardCheck} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>Completed Tasks</p>
            </div>
          </a>
        </div>
        <div className={classes.nav_items}>
          <a
            className={classes.nav_items_a}
            href="#education"
            key={"#education"}
          >
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faFolderPlus} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>Archived Tasks</p>
            </div>
          </a>
        </div>
        <div className={classes.nav_items}>
          <a
            className={classes.nav_items_a}
            href="#education"
            key={"#education"}
          >
            <div className={classes.nav_items_icon}>
              <FontAwesomeIcon icon={faGear} />
            </div>
            <div className={`${toggle ? classes.active : classes.hidden}`}>
            <p>Settings</p>
            </div>
          </a>
        </div>
      </div>
      <div className={classes.nav_item1_con}>
        <div className={classes.profile_con}>
          <div className={classes.profile_con1}>
            <div className={classes.profile_img_con}>
              <div className={classes.profile_img}>
                <img src="/profile.png" alt="Profile" />
              </div>
            </div>
          </div>
          <div className={`${toggle ? classes.profile_con2active : classes.profile_con2}`}>
            <div className={classes.profile_name_role_con}>
              <div className={classes.profile_name_role_con}>
                <p>Pavan Malshan</p>
              </div>
              <div className={classes.profile_role_con}>
                <p>Admin</p>
              </div>
            </div>
            <div className={classes.profile_email_con}>
              <p className={classes.profile_email_con_p}>
                pavanmalshan114@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
