import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './create.module.css';

const Index: React.FunctionComponent<{}> = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Create a New Recipe</h1>
        <form action="#">
          <input
            type="text"
            name="title"
            placeholder="Enter Recipe Title"
            className={styles.title}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter Cooking Time"
            className={styles.cookTime}
          />
          <div className={styles.textAreaContainer}>
            <textarea
              name="ingredients"
              id=""
              placeholder="Enter in your ingredients and we will separate them each line!"
              className={styles.textArea}
              required
            />
          </div>
          <button className={styles.submitBtn} onClick={() => navigate('recipes')}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
