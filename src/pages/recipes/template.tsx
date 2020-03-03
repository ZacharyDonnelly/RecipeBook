import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './recipes.module.css';

interface TemplateProps {
  name: string;
  icon: object;
  route: string;
}
const Template: React.FunctionComponent<TemplateProps> = ({ name, icon, route }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.templateContainer} onClick={() => navigate(route)}>
      {icon}
      <h5 className={styles.itemHeader}>{name}</h5>
    </div>
  );
};

export default Template;
