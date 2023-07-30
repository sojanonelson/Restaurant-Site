import React from "react";

const SpecialDishes = (props) => {
  console.log(props);

  let maxSpclDishes = 8;
  let specialMenus = props.specialMenu.map((menuItem, index) => {
    if (index < maxSpclDishes) {
      return (
        <li>
          <img className="br" src={menuItem.strMealThumb} />
          <h4>{menuItem.strMeal}</h4>
        </li>
      );
    }
  });

  return (
    <section className="special-dishes">
      <div className="container">
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            soluta eveniet minus aut, veniam facere animi cumque voluptatibus
            corporis rerum magni eaque nostrum recusandae aperiam?
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishes;
