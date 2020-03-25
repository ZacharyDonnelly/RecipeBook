import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Template from './template';
import * as styles from './categories.module.css';
import config from '../../../config';

const Index = ({ email }) => {
  const [category, setCategory] = React.useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let route = location.pathname.slice(9);
  let pathRoute = route;
  let letterOne = route[0].toUpperCase();
  route = letterOne + route.slice(1);
  React.useEffect(() => {
    const getRecipeCategory = async () => {
      const { data } = await axios.post(`${config}/api/category`, {
        email,
        category: route,
        headers: {
          Authorization: 'Bearer ' + document.cookie.slice(4),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setCategory(data);
    };
    getRecipeCategory();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.header}>{route.toUpperCase()}</h1>
        {category.map(recipesByCategory => {
          return (
            <div
              key={recipesByCategory.id}
              onClick={() => navigate(`/recipes/${pathRoute}/${recipesByCategory.id}`)}>
              <Template time={recipesByCategory.time} title={recipesByCategory.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { email: { email: string } }) => ({
  email: state.email.email,
});

export default connect(mapStateToProps)(Index);
