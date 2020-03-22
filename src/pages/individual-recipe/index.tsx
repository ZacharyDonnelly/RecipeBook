import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Template from './template';
import * as styles from './individual.module.css';

const Index = ({ email }) => {
  const [getInfo, setInfo] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const preCategory = location.pathname.split('/')[2];
  const capitalizeName = preCategory[0].toUpperCase();
  const category = `${capitalizeName}${preCategory.slice(1)}`;
  const integerID = Number(location.pathname.split('/')[3]);
  React.useEffect(() => {
    const getRecipe = async () => {
      const { data } = await axios.post('http://localhost:3006/api/recipe', {
        email,
        id: integerID,
        category,
        headers: {
          Authorization: 'Bearer ' + document.cookie.slice(4),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      setInfo([data]);
    };
    getRecipe();
  }, []);
  return (
    <div className={styles.container}>
      <button onClick={() => navigate('recipes')} className={styles.btn}>
        Go back
      </button>
      <React.Suspense fallback="test">
        {getInfo.map(recipe => {
          return (
            <div key={recipe.id}>
              <Template
                title={recipe.title}
                time={recipe.time}
                ingredients={recipe.ingredients}
                directions={recipe.directions}
                key={recipe.id}
              />
            </div>
          );
        })}
      </React.Suspense>
    </div>
  );
};

const mapStateToProps = (state: { email: { email: string } }) => ({
  email: state.email.email,
});
// @ts-ignore
export default connect(mapStateToProps)(Index);
