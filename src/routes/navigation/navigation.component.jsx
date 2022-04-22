import {Fragment} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {ReactComponent as CrownLogo} from '../../assets/crownLogo.svg'
import './navigation.styles.scss'

const Navigation =()=>{
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrownLogo className="logo" />
            </Link>
          <div className="nav-links-container"></div>
            <Link className="nav-link" to='/shop'>
            Shop
            </Link>
        </div>
        <Outlet/>
      </Fragment>
      )
  }

  export default Navigation