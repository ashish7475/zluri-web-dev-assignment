import React, { Component } from "react"
import { Link } from "gatsby"
import { Menu, X } from "react-feather"
import styled from "styled-components"
import { Container } from "./style"



export default class Navigation extends Component {
    state = {
        mobileMenuOpen: false,
        hasScrolled: false,
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, { passive: true })
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 32) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            mobileMenuOpen: !prevState.mobileMenuOpen,
        }))
    }

    closeMobileMenu = () => {
        if (this.state.mobileMenuOpen) {
            this.setState({ mobileMenuOpen: false })
        }
    }

    render() {
        const { mobileMenuOpen } = this.state

        return (
            <Nav {...this.props} scrolled={this.state.hasScrolled}>
                <StyledContainer>
                    <Brand>
                        <Link to="/" onClick={this.closeMobileMenu}>
                            <h2>ZLURI</h2>
                        </Link>
                    </Brand>
                    <Mobile>
                        <button
                            onClick={this.toggleMobileMenu}
                            style={{ color: "white", background: "none" }}
                        >
                            {this.state.mobileMenuOpen ? (
                                <X size={24} alt="close menu" />
                            ) : (
                                <Menu size={24} alt="open menu" />
                            )}
                        </button>
                    </Mobile>

                    <Mobile hide>
                        <NavListWrapper>
                            <ul>
                                <NavItem>
                                <a href="mailto:ashish729912@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                                </NavItem>
                                <NavItem>
                                    <a href="tel:+917889644025">Contact me</a>
                                </NavItem>
                                <ActionsContainer>
                                    <a href="https://drive.google.com/file/d/1k41h0ioU8VLZ0LJg3uNstElKCWY2wpOD/view?usp=sharing" target="__blank">
                                        <button>Resume</button>
                                    </a>
                                </ActionsContainer>
                            </ul>
                        </NavListWrapper>
                    </Mobile>
                </StyledContainer>
                <Mobile>
                    {mobileMenuOpen && (
                        <MobileMenu>
                            <NavListWrapperMobile mobile={true}>
                                <ul>
                                    <NavItemMobile>
                                        <a href="">Email</a>
                                    </NavItemMobile>
                                    <NavItemMobile>
                                        <a href="">Contact me</a>
                                    </NavItemMobile>
                                    <ActionsContainer>
                                        <a href="https://get.zluri.com/request-demo">
                                            <button>Resume</button>
                                        </a>
                                    </ActionsContainer>
                                </ul>
                            </NavListWrapperMobile>
                        </MobileMenu>
                    )}
                </Mobile>
            </Nav>
        )
    }
}
const StyledContainer = styled(Container)`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0 12px` : `24px 0 20px`)};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${props => (props.scrolled ? `black` : null)};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 991px) {
    padding: ${(props) => (props.scrolled ? `16px 0 15px` : `24px 0 15px`)};
  }
  &:hover{
    background: #000000;
    transition:0.3s ease-in-out 0s;
  }
`

const NavListWrapper = styled.div`
  display: flex;
  @media (max-width: 1199px)  {
    column-gap: 10px;
  }
  ul {
    align-self: center;
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    padding:0;
    column-gap:5px;
    li {
border-radius: 23.5px;
transition: 0.3s ease-in-out 0s;
      &:hover {
        text-decoration: underline !important;
      }
    }

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`
const NavListWrapperMobile = styled.div`
  display: flex;
  column-gap: 45px;
  justify-content: center;
  ul {
    align-self: center;
    list-style: none;
    margin: 0;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

const NavItem = styled.li`
font-family: 'Lexend Medium';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
height: 41px;
text-align: center;
color: #FFFFFF;
margin: 0 -3.5px;
padding: 8px 14px;
  
border-radius: 23.5px;

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  &.active {
    a {
      opacity: 1;
      text-decoration: none;
    }
  }

  span {
    margin: 0 0 1px 6px;
  }
`
const NavItemMobile = styled.li`
  margin: 0 0.75em;
  padding: 15px 0;
  font-family: Lexend Medium;

  font-size: 20px;
  line-height: 24px;
  
  a {
    text-decoration: none;
    opacity: 0.9;
    color: #FFFFFF;
  }

  &.active {
    a {
      opacity: 1;
      text-decoration: none;
    }
  }

  span {
    margin: 0 0 1px 6px;
  }
  @media (max-width: 991px) {
    width:650px;
  }
  @media (max-width: 767px) {
    width:460px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width:300px;
  }
`

const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: black;
  padding-top: 20px;
  backdrop-filter: blur(5px);
  opacity: 0.98;
  height: 600px;
  width: 100%;
  overflow-y: scroll;
`
const MultiBrand = styled.div`
text-decoration: none;
letter-spacing: 1px;
margin: 0;
a {
    color: #FFFFFF;
  text-decoration: none;
}
div{
  @media (max-width: 767px) {
    display: none;
  }
}
span{
  display:none;
  @media (max-width: 767px) {
    display: block;
  }
}
`
const Brand = styled.div`
h2{
  font-family: Lexend Bold;
  color: #FFFFFF;
}
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  margin-top: -6px;
  padding-bottom: 0px;
  @media (max-width: 991px) {
    padding-bottom: 0;
    align-self: end;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
  color: #FFFFFF;
      text-decoration: none;
    }
  }
`

const ActionsContainer = styled.div`
padding: 5px 0 5px 12px;

  button {
    font-family: 'Lexend Medium';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
text-align: center;
color: #000000;
cursor:pointer;
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 47px;
    padding: 2px 22px;
    box-shadow: inset 0 0 0 0 #fff;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
  }
`
const Mobile = styled.div`
  display: none;
  align-self: center;

  @media (max-width: 991px) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: 991px) {
      display: none;
    }
  `}
`
