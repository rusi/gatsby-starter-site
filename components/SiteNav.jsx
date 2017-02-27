import React, {prefix} from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

class SiteNav extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={prefixLink('/')}>Gatsby Template</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <IndexLinkContainer to={prefixLink('/')}>
            <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to={prefixLink('/about/')}>
            <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

export default SiteNav