import * as React from 'react';
import * as styles from './index.css';

const Index: React.FunctionComponent<{}> = () => (
  <section className={styles.hero}>
    <header className={styles.header}>RecipeBook</header>
    <h5 className={styles.sub}>Recipe Organizer</h5>
  </section>
);

export default Index;
