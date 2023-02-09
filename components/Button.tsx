import styles from '@components/Button.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

const Button = (props: any) => {
  if (!Utilities.isEmpty(props.href)) {
    return <a href={props.href} className={styles.button} children={props.children} {...props} />;
  }

  return <button style={props.style} className={styles.button} onClick={props.onClick} children={props.children} />;
};

export default Button;
