import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Template from './template';
import * as styles from './categories.module.css';

const Index = ({ email: { email } }) => {
  const [category, setCategory] = React.useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let route = location.pathname.slice(9);
  let pathRoute = route;
  let letterOne = route[0].toUpperCase();
  route = letterOne + route.slice(1);
  React.useEffect(() => {
    const getRecipeCategory = async () => {
      const { data } = await axios.post('http://localhost:3000/api/category', {
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
        {category.map(x => {
          return (
            <div key={x.id} onClick={() => navigate(`/recipes/${pathRoute}/${x.title}`)}>
              <Template time={x.time} title={x.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: { email: string }) => ({
  email: state.email,
});
// @ts-ignore
export default connect(mapStateToProps)(Index);
