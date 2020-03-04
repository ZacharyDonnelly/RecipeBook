import * as React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { titleAction, timeAction, ingredientAction } from '../../actions';
import { TitleAction, TimeAction, IngredientAction } from '../../actions/types';
import * as styles from './create.module.css';
interface CreateProps {
  dispatch: React.Dispatch<TitleAction | TimeAction | IngredientAction>;
  title: string;
  time: string;
  ingredients: string;
}
const Index: React.FC<CreateProps> = ({ dispatch, title, time, ingredients }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Create a New Recipe</h1>
        <form action="#">
          <input
            type="text"
            name="Title"
            value={title}
            onChange={e => dispatch(titleAction(e.target.value))}
            placeholder="Enter Recipe Title"
            className={styles.title}
          />
          <input
            type="text"
            name="Cooking Time"
            value={time}
            placeholder="Enter Cooking Time"
            onChange={e => dispatch(timeAction(e.target.value))}
            className={styles.cookTime}
          />
          <div className={styles.textAreaContainer}>
            <textarea
              name="Ingredients"
              placeholder="Enter in your ingredients and we will separate them each line!"
              value={ingredients}
              onChange={e => dispatch(ingredientAction(e.target.value))}
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
const mapStateToProps = (state: {
  recipe: { title: string; time: string; ingredients: string };
}) => ({
  title: state.recipe.title,
  time: state.recipe.time,
  ingredients: state.recipe.ingredients,
});

export default connect(mapStateToProps)(Index);
