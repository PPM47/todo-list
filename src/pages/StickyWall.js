import React from 'react'

const StickyWall = () => {
  return (
    <>
    <div>StickyWall</div>
    
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
    </>
    
  )
}

export default StickyWall