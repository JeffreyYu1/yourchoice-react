import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, List, Image, Divider, Grid, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu inverted borderless className="ui borderless topmenu menu">
          <Container>
            <Menu.Item fitted position="left" id={"logoLV"}>LOUIS VUTTION</Menu.Item>
            <Menu.Item fitted position="center " id={"color2"}>LV NOW</Menu.Item>

            <Menu.Item id={"color1"}>WORLD OF LOUIS VUITTON</Menu.Item>
            <Menu.Item id={"color1"}>WOMAN</Menu.Item>
            <Menu.Item id={"color1"}>MEN</Menu.Item>
            <Menu.Item id={"color1"}>STORES</Menu.Item>


            <Menu.Item fitted position="right" id={"color1"}><Icon name="search"/></Menu.Item>
            <Menu.Item fitted id={"color1"}><Icon name="shopping bag"/></Menu.Item>
            <Menu.Item fitted id={"color1"}><Icon name="heart"/></Menu.Item>
            <Menu.Item fitted id={"color1"}>MY LV</Menu.Item>
            <Menu.Item fitted id={"color1"}><Icon name="question circle outline"/></Menu.Item>
            <Menu.Item fitted id={"color1"}><Icon name="flag checkered"/></Menu.Item>
            <Menu.Item id={"color1"}>+1.866.VUITTON</Menu.Item>

          </Container>
        </Menu>

    )
  }
}

class Picture extends React.Component {
  render() {
    return (
        <Image className="margin"
               src={'https://us.louisvuitton.com/images/is/image/lv/1/VE_DI1_L/louis-vuitton-men-s-spring-summer-2019-collection--Men_RW_SS19_Campaign_Chapter_2_DI1.jpg?wid=1360&hei=633'}/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (

        <Container className={"ui centered grid container"}>
          <Container textAlign={"center"}>
            <Header id={"center"}>
              MEN'S SPRING-SUMMER 2019 COLLECTION
            </Header>
          </Container>
          <Container textAlign={"center"}>
            <Header id={"move"}>
              by Virgil Abloh
            </Header>
          </Container>
          <Container className={"ui centered grid container"}>
            <Button id={"uibutton"}>
              <Icon name="angle right"/>
              Shop Now
            </Button>
          </Container>
        </Container>

    )
  }
}

class ThirdMenu extends React.Component {
  render() {
    return (
        <Menu inverted borderless className={"ui borderless inverted topmenu menu"}>
          <Container>
            <Menu.Item fitted position="left" id={"color12"}>LOUIS VUITTON</Menu.Item>
            <Menu.Item fitted position="right" id={"color13"}><Icon name="arrow up"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu className={"ui borderless inverted nine item menu"} id={"navbar"}>
          <Menu.Item id={"color1"}>UNITED STATES</Menu.Item>
          <Menu.Item id={"color1"}>NEWSLETTER</Menu.Item>
          <Menu.Item id={"color1"}>CONTACT</Menu.Item>
          <Menu.Item id={"color1"}>APPS</Menu.Item>
          <Menu.Item id={"color1"}>CALIFORNIA TRANSPARENCY</Menu.Item>
          <Menu.Item id={"color1"}>LEGAL NOTICE</Menu.Item>
          <Menu.Item id={"color1"}>CAREERS</Menu.Item>
          <Menu.Item id={"color1"}>SITEMAP</Menu.Item>

        </Menu>
    )
  }
}

class YourChoice extends React.Component {

  render() {
    return (
        <div>

          <TopMenu/>
          <Picture/>
          <MiddleMenu/>
          <ThirdMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<YourChoice/>, document.getElementById('root'));
