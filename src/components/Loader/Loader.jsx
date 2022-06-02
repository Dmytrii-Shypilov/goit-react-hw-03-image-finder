import { Component } from 'react';
import s from './loader.module.css'

import {
  BarLoader,
  DoubleBubble,
  SlidingPebbles,
  DoubleOrbit,
} from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css';

class Loader extends Component {
  render() {
    return (
      <div className={s.loader}>
        <DoubleOrbit
          text={'Loading...'}
          bgColor={'#F0A500'}
          center={false}
          width={'150px'}
          height={'150px'}
        />
      </div>
    );
  }
}

export default Loader;
