import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Veggie Paradise',
    description: 'Goldern Corn, Black Olives, Capsicum & Red Paprika',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Indi Tandoori Paneer',
    description: 'It is hot. It is spicy. Tandoori paneer with capsicum I red paprika I mint mayo',
    price: 200,
  },
  {
    id: 'm3',
    name: 'Indi Chicken Tikka',
    description: 'The wholesome flavour of tandoori masala with Chicken tikka',
    price: 220,
  },
  {
    id: 'm4',
    name: 'Veg Extravaganza',
    description: 'A pizza that decidedly staggers under an overload of golden corn',
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;