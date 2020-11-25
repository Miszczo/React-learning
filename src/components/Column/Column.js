import React from 'react';
import styles from './Column.scss';

class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
      <h3 className={styles.title}>{this.props.animals}{this.props.plants}{this.props.minerals}</h3>     
      </section>
    )
  }
}

export default Column;
