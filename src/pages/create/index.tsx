import * as React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  titleAction,
  timeAction,
  ingredientAction,
  categoryAction,
  directionsAction,
} from '../../actions';
import {
  TitleAction,
  TimeAction,
  IngredientAction,
  CategoryAction,
  DirectionsAction,
} from '../../actions/types';
import * as styles from './create.module.css';
interface CreateProps {
  dispatch: React.Dispatch<
    TitleAction | TimeAction | IngredientAction | CategoryAction | DirectionsAction
  >;
  title: string;
  time: string;
  ingredients: string;
  directions: string;
  category: string;
  email: { email: string };
}

const Index = ({
  dispatch,
  title,
  time,
  ingredients,
  directions,
  category,
  email: { email },
}: CreateProps) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const res = await axios.post('http://localhost:3006/api/new-recipe', {
      email,
      title,
      category,
      time,
      ingredients,
      directions,
      headers: {
        Authorization: 'Bearer ' + document.cookie.slice(4),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    if (res.status === 200) {
      navigate('recipes');
    } else {
      alert('The Email you entered is already in use');
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>Create a New Recipe</h1>
        <form action="#" onSubmit={e => handleSubmit(e)}>
          <select
            name="Category"
            onChange={e => dispatch(categoryAction(e.target.value))}
            className={styles.dropDown}>
            <option value="Pasta">Pasta</option>
            <option value="Cookies">Cookies</option>
            <option value="Soups">Soups</option>
            <option value="Cakes">Cakes</option>
            <option value="Bakery">Bakery</option>
            <option value="Starters">Starter</option>
            <option value="Salad">Salad</option>
            <option value="IceCream">IceCream</option>
            <option value="Sweets">Sweets</option>
            <option value="Dessert">Dessert</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Beverages">Beverages</option>
            <option value="Burgers">Burgers</option>
            <option value="Seafood">Seafood</option>
          </select>
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
              placeholder="Enter in one ingredient per line. We will be separating ingredients by line."
              value={ingredients}
              onChange={e => dispatch(ingredientAction(e.target.value))}
              className={styles.textArea}
              required
            />
          </div>
          <div className={styles.textAreaContainer}>
            <textarea
              name="Directions"
              placeholder="Enter in the directions to create this wonderful recipe! We will be separating directions by line."
              value={directions}
              onChange={e => dispatch(directionsAction(e.target.value))}
              className={styles.textArea}
              required
            />
          </div>

          <button className={styles.submitBtn} onClick={() => handleClick()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
const handleSubmit: Function = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
const mapStateToProps = (state: {
  recipe: {
    title: string;
    time: string;
    ingredients: string;
    category: string;
    directions: string;
  };
  email: string;
}) => ({
  email: state.email,
  category: state.recipe.category,
  title: state.recipe.title,
  time: state.recipe.time,
  ingredients: state.recipe.ingredients,
  directions: state.recipe.directions,
});
// @ts-ignore
export default connect(mapStateToProps)(Index);
