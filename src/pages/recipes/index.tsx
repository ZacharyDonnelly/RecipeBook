import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Template from './template';
import * as styles from './recipes.module.css';

const Pasta = React.lazy(() =>
  import(/*webpackChunkName: "Pasta-svg"*/ '../../assets/svg/categories/pasta'),
);
const Seafood = React.lazy(() =>
  import(/*webpackChunkName: "Seafood-svg"*/ '../../assets/svg/categories/seafood'),
);
const Burgers = React.lazy(() =>
  import(/*webpackChunkName: "Burgers-svg"*/ '../../assets/svg/categories/burgers'),
);
const Breakfast = React.lazy(() =>
  import(/*webpackChunkName: "Breakfast-svg"*/ '../../assets/svg/categories/breakfast'),
);
const Lunch = React.lazy(() =>
  import(/*webpackChunkName: "Lunch-svg"*/ '../../assets/svg/categories/lunch'),
);
const Dinner = React.lazy(() =>
  import(/*webpackChunkName: "Dinner-svg"*/ '../../assets/svg/categories/dinner'),
);
const Dessert = React.lazy(() =>
  import(/*webpackChunkName: "Dessert-svg"*/ '../../assets/svg/categories/dessert'),
);
const Sweets = React.lazy(() =>
  import(/*webpackChunkName: "Sweets-svg"*/ '../../assets/svg/categories/sweets'),
);
const Icecream = React.lazy(() =>
  import(/*webpackChunkName: "Icecream-svg"*/ '../../assets/svg/categories/icecream'),
);
const Salad = React.lazy(() =>
  import(/*webpackChunkName: "Salad-svg"*/ '../../assets/svg/categories/salad'),
);
const Starters = React.lazy(() =>
  import(/*webpackChunkName: "Starters-svg"*/ '../../assets/svg/categories/starters'),
);
const Drinks = React.lazy(() =>
  import(/*webpackChunkName: "Drinks-svg"*/ '../../assets/svg/categories/beverages'),
);
const Bakery = React.lazy(() =>
  import(/*webpackChunkName: "Bakery-svg"*/ '../../assets/svg/categories/bakery'),
);
const Cakes = React.lazy(() =>
  import(/*webpackChunkName: "Cakes-svg"*/ '../../assets/svg/categories/cakes'),
);
const Soups = React.lazy(() =>
  import(/*webpackChunkName: "Soups-svg"*/ '../../assets/svg/categories/soups'),
);
const Cookies = React.lazy(() =>
  import(/*webpackChunkName: "Cookies-svg"*/ '../../assets/svg/categories/cookies'),
);

const Recipes = ({ email }) => {
  let [dinner, setDinnerCount]: React.ComponentState = React.useState(0);
  let [seafood, setSeafoodCount]: React.ComponentState = React.useState(0);
  let [burgers, setBurgersCount]: React.ComponentState = React.useState(0);
  let [breakfast, setBreakfastCount]: React.ComponentState = React.useState(0);
  let [beverages, setBeveragesCount]: React.ComponentState = React.useState(0);
  let [lunch, setLunchCount]: React.ComponentState = React.useState(0);
  let [dessert, setDessertCount]: React.ComponentState = React.useState(0);
  let [sweets, setSweetsCount]: React.ComponentState = React.useState(0);
  let [icecream, setIcecreamCount]: React.ComponentState = React.useState(0);
  let [salad, setSaladCount]: React.ComponentState = React.useState(0);
  let [starters, setStartersCount]: React.ComponentState = React.useState(0);
  let [bakery, setBakeryCount]: React.ComponentState = React.useState(0);
  let [cakes, setCakesCount]: React.ComponentState = React.useState(0);
  let [soups, setSoupsCount]: React.ComponentState = React.useState(0);
  let [cookies, setCookiesCount]: React.ComponentState = React.useState(0);
  let [pasta, setPastaCount]: React.ComponentState = React.useState(0);
  const navigate = useNavigate();
  const Loading = setTimeout(() => 500) ? null : 'Loading';
  React.useEffect(() => {
    const getRecipeCount = async () => {
      const { data } = await axios.post('http://localhost:3006/api/get-all', {
        email,
        headers: {
          Authorization: 'Bearer ' + document.cookie.slice(4),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      data.forEach((x: { category: string }) => {
        switch (x.category) {
          case 'Dinner':
            setDinnerCount((dinner += 1));
            break;
          case 'Lunch':
            setLunchCount((lunch += 1));
            break;
          case 'Breakfast':
            setBreakfastCount((breakfast += 1));
            break;
          case 'Seafood':
            setSeafoodCount((seafood += 1));
            break;
          case 'Soups':
            setSoupsCount((soups += 1));
            break;
          case 'Salad':
            setSaladCount((salad += 1));
            break;
          case 'Burgers':
            setBurgersCount((burgers += 1));
            break;
          case 'Bakery':
            setBakeryCount((bakery += 1));
            break;
          case 'Beverages':
            setBeveragesCount((beverages += 1));
            break;
          case 'IceCream':
            setIcecreamCount((icecream += 1));
            break;
          case 'Sweets':
            setSweetsCount((sweets += 1));
            break;
          case 'Cookies':
            setCookiesCount((cookies += 1));
            break;
          case 'Pasta':
            setPastaCount((pasta += 1));
            break;
          case 'Dessert':
            setDessertCount((dessert += 1));
            break;
          case 'Cakes':
            setCakesCount((cakes += 1));
            break;
          case 'Starters':
            setStartersCount((starters += 1));
            break;
          default:
            break;
        }
      });
    };
    getRecipeCount();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link to="/" style={{ color: '#000', fontSize: 32, textDecoration: 'none' }}>
        Home
      </Link>
      <h1 className={styles.header}>Recipes</h1>
      <h2 className={styles.email}>{email}</h2> {/*DELETE ME*/}
      <button className={styles.btn} onClick={() => navigate('create')}>
        Create New
      </button>
      <div className={styles.container}>
        <React.Suspense fallback={Loading}>
          <div className={styles.itemDiv}>
            <small>{pasta}</small>
            <Template name="Pasta" icon={<Pasta />} route="pasta" />
          </div>
          <div className={styles.itemDiv}>
            <small>{seafood}</small>
            <Template name="Seafood" icon={<Seafood />} route="seafood" />
          </div>
          <div className={styles.itemDiv}>
            <small>{burgers}</small>
            <Template name="Burgers" icon={<Burgers />} route="burgers" />
          </div>
          <div className={styles.itemDiv}>
            <small>{breakfast}</small>
            <Template name="Breakfast" icon={<Breakfast />} route="breakfast" />
          </div>
          <div className={styles.itemDiv}>
            <small>{lunch}</small>
            <Template name="Lunch" icon={<Lunch />} route="lunch" />
          </div>
          <div className={styles.itemDiv}>
            <small>{dinner}</small>
            <Template name="Dinner" icon={<Dinner />} route="dinner" />
          </div>
          <div className={styles.itemDiv}>
            <small>{dessert}</small>
            <Template name="Dessert" icon={<Dessert />} route="dessert" />
          </div>
          <div className={styles.itemDiv}>
            <small>{starters}</small>
            <Template name="Starters" icon={<Starters />} route="starters" />
          </div>
          <div className={styles.itemDiv}>
            <small>{soups}</small>
            <Template name="Soups" icon={<Soups />} route="soups" />
          </div>
          <div className={styles.itemDiv}>
            <small>{salad}</small>
            <Template name="Salad" icon={<Salad />} route="salad" />
          </div>
          <div className={styles.itemDiv}>
            <small>{beverages}</small>
            <Template name="Beverages" icon={<Drinks />} route="drinks" />
          </div>
          <div className={styles.itemDiv}>
            <small>{sweets}</small>
            <Template name="Sweets" icon={<Sweets />} route="sweets" />
          </div>
          <div className={styles.itemDiv}>
            <small>{icecream}</small>
            <Template name="Icecream" icon={<Icecream />} route="icecream" />
          </div>
          <div className={styles.itemDiv}>
            <small>{bakery}</small>
            <Template name="Bakery" icon={<Bakery />} route="bakery" />
          </div>
          <div className={styles.itemDiv}>
            <small>{cakes}</small>
            <Template name="Cakes" icon={<Cakes />} route="cakes" />
          </div>
          <div className={styles.itemDiv}>
            <small>{cookies}</small>
            <Template name="Cookies" icon={<Cookies />} route="cookies" />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
};
const mapStateToProps = (state: { email: { email: any } }) => ({
  email: state.email.email,
});

export default connect(mapStateToProps)(Recipes);
