import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import classes from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbtack,
  faLayerGroup,
  faClipboardCheck,
  faCalendar,
  faUser,
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const onClickSearch = () => {
    setToggle(false);
  };

  return (
    <div
      className={`${
        toggle ? classes.main_contineractive : classes.main_continer
      }`}
    >
      <div className={classes.nav_main_item_con}>
        <div className={classes.nav_item_con}>
          <div
            className={`${classes.item_name} ${
              toggle ? classes.active : classes.hidden
            }`}
          >
            <p>Home</p>
          </div>
          <div className={classes.side_menu_toggle}>
            <div
              className={`${
                toggle ? classes.toggle_btn : classes.toggle_btn_active
              }`}
              onClick={() => setToggle((prev) => !prev)}
            >
              <div className={classes.toggle_btn_icon}></div>
            </div>
          </div>
        </div>
        <div className={classes.nav_item_con}>
          <div className={classes.nav_search_bar}>
            <div
              className={classes.nav_search_bar_icon}
              onClick={onClickSearch}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div
              className={`${classes.nav_search_bar_inpucont_con} ${
                toggle ? classes.active : classes.hidden
              }`}
            >
              <input
                className={classes.nav_search_bar_input}
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className={classes.nav_item2_con}>
          <div className={classes.nav_item_con_title}>
            <p>Tasks</p>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/todayTasks">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Today</p>
                <div className={classes.item_count}>
                  <p>2</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/upcoming">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faThumbtack} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Upcoming Tasks</p>
                <div className={classes.item_count}>
                  <p>1</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/calendar">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Calendar</p>
                <div className={classes.item_count}>
                  <p>4</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/StickyWall">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Sticky Wall</p>
                <div className={classes.item_count}>
                  <p>7</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={classes.nav_item2_con}>
          <div className={classes.nav_item_con_title}>
            <p>Lists</p>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/personal">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Personal</p>
                <div className={classes.item_count}>
                  <p>2</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/work">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faThumbtack} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Work</p>
                <div className={classes.item_count}>
                  <p>1</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.nav_items}>
            <Link className={classes.nav_items_a} to="/addList">
              <div className={classes.nav_items_icon}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div
                className={`${classes.item_name} ${
                  toggle ? classes.active : classes.hidden
                }`}
              >
                <p>Add New List</p>
              </div>
            </Link>
          </div>
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
          <div
            className={`${
              toggle ? classes.profile_con2active : classes.profile_con2
            }`}
          >
            <div className={classes.profile_name_role_con}>
              <div className={classes.profile_name}>
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
