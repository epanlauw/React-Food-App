import AvailableMeals from "./AvaiableMeals/AvailableMeals";
import { Fragment } from "react";
import MealsSummary from "./MealsSummary/MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
