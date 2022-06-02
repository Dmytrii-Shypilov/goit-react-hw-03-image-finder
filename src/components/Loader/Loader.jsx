import { Component } from 'react';
import s from './loader.module.css'

import {
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
          width={'100px'}
          height={'100px'}
        />
      </div>
    );
  }
}

export default Loader;
