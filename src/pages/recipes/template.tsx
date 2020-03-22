import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './recipes.module.css';

type TemplateProps = {
  name: string;
  icon: object;
  route: string;
};

const Template = ({ name, icon, route }: TemplateProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.templateContainer} onClick={() => navigate(`/recipes/${route}`)}>
      {icon}
      <h5 className={styles.itemHeader}>{name}</h5>
    </div>
  );
};

export default Template;
