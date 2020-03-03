import * as React from 'react';
import * as styles from './selection.module.css';

const Index: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>RecipeBook</h1>
      <div className={styles.btnDiv}>
        <button className={styles.existingBtn}>Choose from existing</button>
        <button className={styles.newBtn}>Create New</button>
      </div>
    </div>
  );
};

export default Index;
