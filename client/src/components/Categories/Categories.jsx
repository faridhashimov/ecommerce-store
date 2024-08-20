import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CategoryPopup } from '..';
import { useGetAllCategoriesQuery } from '../../redux/ecommerceApi';

const CategoriesContainer = styled.div`
  box-shadow: 0px 35px 75px -2px rgba(34, 60, 80, 0.47);
  width: 1100px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  display: ${(props) => (props.state ? 'block' : 'none')};
  position: absolute;
  bottom: -56px;
  right: -602px;
  transition: all 0.3s ease-in;
  z-index: 1000;
  padding: 0px 10px;
`;
const AllCategories = styled.div`
  position: relative;
  a {
    padding: 0px;
  }
`;
const CategoriesList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  position: relative;
  a {
    padding: 0;
  }
`;
const CategoryItem = styled.li`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.c ? '#f27a1a' : '#333')};

  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.c ? '2px solid #f27a1a' : '2px solid #fff'};
  transition: all 0.2s ease-in;
  &:hover {
    /* color: #f27a1a; */
    border-bottom: 2px solid #f27a1a;
    transition: all 0.2s ease-in;
  }
`;
//=================================================

export const Categories = ({ openShop }) => {
  const [openCategories, setOpenCategories] = useState(false);
  const [cat, setCat] = useState('');
  const [categories, setCategories] = useState({});

  const { data, isLoading, isError } = useGetAllCategoriesQuery();

  const onOpenCategoryList = (cat) => {
    setOpenCategories(true);
    setCat(cat);
  };

  useEffect(() => {
    setCategories(data);
    return () => {
      setCategories({});
    };
  }, [data]);

  return (
    <CategoriesContainer state={openShop}>
      <AllCategories>
        <CategoriesList
          onMouseLeave={() => {
            setOpenCategories(false);
            setCat('');
          }}
        >
          <CategoryItem
            onMouseEnter={() => onOpenCategoryList('Women')}
            c={cat === 'Women' ? true : false}
          >
            <Link style={{ color: 'inherit' }} to="/list">
              Women
            </Link>
          </CategoryItem>
          <CategoryItem
            onMouseEnter={() => onOpenCategoryList('Men')}
            c={cat === 'Men' ? true : false}
          >
            <Link style={{ color: 'inherit' }} to="/list">
              Men
            </Link>
          </CategoryItem>
          <CategoryItem
            onMouseEnter={() => onOpenCategoryList('Kids')}
            c={cat === 'Kids' ? true : false}
          >
            <Link style={{ color: 'inherit' }} to="/list">
              Kids
            </Link>
          </CategoryItem>
          <CategoryItem
            onMouseEnter={() => onOpenCategoryList('Accessories')}
            c={cat === 'Accessories' ? true : false}
          >
            <Link style={{ color: 'inherit' }} to="/list">
              Accessories
            </Link>
          </CategoryItem>
          <CategoryItem
            onMouseEnter={() => onOpenCategoryList('Shoes')}
            c={cat === 'Shoes' ? true : false}
          >
            <Link style={{ color: 'inherit' }} to="/list">
              Home
            </Link>
          </CategoryItem>
          <CategoryPopup
            cat={cat}
            loading={isLoading}
            error={isError}
            categories={categories}
            popup={openCategories}
          />
        </CategoriesList>
      </AllCategories>
    </CategoriesContainer>
  );
};
