import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const links = [
  {
    name: 'ບັນຊີ',
    linkTo: '/user/dashboard'
  },
  {
    name: 'ຂໍ້ມູນສ່ວນຕົວ',
    linkTo: '/user/user_profile'
  },
  {
    name: 'ກະຕ່າ',
    linkTo: '/user/cart'
  },
]

const admin = [
  {
    name: 'Site info',
    linkTo: '/admin/site_info'
  },
  {
    name: 'Add products',
    linkTo: '/admin/add_product'
  },
  {
    name: 'Manage categories',
    linkTo: '/admin/manage_categories'
  },
  {
    name: 'Upload file',
    linkTo: '/admin/add_file'
  }
]

const UserLayout = (props) => {
  const generateLinks = (links) => (
    links.map((item, i)=>(
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    ))
  )

  return (
    <div className="container">
      <div className="user_container">
        <div className="user_left_nav">
          <h2 style={{fontFamily: 'noto_sans_lao_uiblack'}}>ບັນຊີຂອງຂ້ອຍ</h2>
          <div className="links">
            { generateLinks(links) }
          </div>
          {
            props.user.userData.isAdmin ?
              <div>
                <h2>Admin</h2>
                <div className="links">
                  { generateLinks(admin) }
                </div>
              </div>
            : null
          }

        </div>
        <div className="user_right">
          {props.children}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserLayout);