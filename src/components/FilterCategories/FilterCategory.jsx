import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FilterCategory = () => {
  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`;
  const [categories, getAllCategories] = useFetch(url);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories();
  }, []);

  //console.log(categories);

  const handleClickCategories = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
    dispatch(getAllProductsThunk(url));
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };

  return (
    <article>
      <h3>Category</h3>
      <hr />
      <ul>
      <li onClick={handleClickAllProducts}>All products</li>
        {categories?.map((category) => (
          <li
            onClick={() => handleClickCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
