import React from 'react';
import style from './index.less';
import { transform, i18n, lan } from '../../unit/const';
import { isMobile } from '../../unit';


export default class Guide extends React.Component {
  constructor() {
    super();
    this.state = {
      isMobile: isMobile(),
    };
  }
  render() {
    if (this.state.isMobile) {
      return (
        null
      );
    }
    return (
      <div style={{ display: 'none'}}>
      
      </div>
    );
  }
}

