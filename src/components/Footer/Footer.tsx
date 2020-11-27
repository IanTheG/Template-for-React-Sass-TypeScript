import * as React from 'react';
// import { render } from 'react-dom';
// / <reference types="react.d.ts" />

interface Props {
  title?: string // optional parameter 
  name: string
}

// class Footer extends React.Component<Props> {
//   render() {
//     return (
//       <h2 className="footer">Goodbye {this.props.title} {this.props.name}</h2>
//     )
//   }
// }

const Footer: React.FC<Props> = ({title, name}) => {
  return (
    <h2 className="footer">Goodbye {title} {name}</h2>
  )
}

export default Footer;
