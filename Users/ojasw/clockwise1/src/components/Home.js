class Navbar extends Component {
  state={clicked: false}
  handleClick=() => {
      this.setState({ clicked: !this.state.clicked })
  }


  render(){
      return(
          <nav className="NavbarItems">
              <h1 className="navbar-logo">ClockWise</h1>
              <div className="menu-icon" onClick={this.handleClick}>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                  
                  {MenuItems.map((item, index)=>{
                      return(
                          <li key={index}>
                              <a className={item.cName} href={item.url}>
                                  {item.title}
                              </a>
                          </li>
                      )
                  })}
              </ul>
              <button>Log In</button>
          </nav>

      )
  }
}

export default Navbar