import React, { useColback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../redux/slices/categorySlice';

const Category = () => {
  const dispatch = useDispatch();
  const { categoryId, category } = useSelector(({ categorySlice }) => categorySlice);

  const onClickCategory = (index) => {
    dispatch(setCategoryId(index));
  }

  return (
    <div className="main__sort sort">
      <ul className="sort__menu">
        <li
          className={categoryId === null ? "sort__active" : "sort__li"}
          onClick={() => onClickCategory(null)}
        >
          По физ лицам
        </li>

        {
          category.map((elem, index) => {
            return (
              <li
                key={elem}
                className={categoryId === index ? "sort__active" : "sort__li"}
                onClick={() => onClickCategory(index)}
              >
                {elem}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Category;
