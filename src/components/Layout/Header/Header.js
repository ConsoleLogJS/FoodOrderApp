import classes from './Header.module.css';

import mealsImage from '../../../assets/2.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

function Header({ onShowCart }) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A plate full of delicious food" />
      </div>
    </>
  );
}

export default Header;
