import * as React from 'react';
// import { render } from 'react-dom';
// / <reference types="react.d.ts" />

interface Props {
  title?: string // optional parameter 
  name: string
}

// class Header extends React.Component<Props> {
//   render() {
//     return (
//       <h2>Hello {this.props.title} {this.props.name}</h2>
//     )
//   }
// }

const Header: React.FC<Props> = ({title, name}) => {
  return (
    <h2 className="header">Hello {title} {name}</h2>
  )
}

export default Header;
