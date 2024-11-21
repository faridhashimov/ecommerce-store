import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FilterAlt } from '@mui/icons-material';
import styled from 'styled-components';
import { mobile } from '../responsive';

import { reset, add } from '../redux/resetSlice';
import { publicRequest } from '../requestMethods';
import { Footer, ListFilters, Navbar, SearchFilterItem } from '../components';
import { Products } from '../pages';

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  width: 93vw;
  margin: 0 auto;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  opacity: ${(props) => props.opacity};
  ${mobile({ flexDirection: 'column', minHeight: '100%' })}
`;
const ProductsContainer = styled.div`
  flex: 5;
  align-self: flex-start;
  ${mobile({ width: '100%' })}
  @media (max-width: 700px) {
    display: ${(props) => (props.d === 1 ? 'none' : 'block')};
  }
`;
const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 10px 20px;
  ${mobile({ padding: '0px' })}
`;
const ListHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ListHeaderBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  padding-bottom: 5px;
`;
const ListHeadeTitle = styled.h1`
  font-size: 17px;
  font-weight: 500;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ marginTop: '10px' })}
`;
const FilterBy = styled.select`
  padding: 2px 5px;
  width: 180px;
  border: 1px solid #ccc;
  color: #666;
  &:focus {
    outline: none;
  }
  ${mobile({ width: '150px' })}
`;
const FilterByOption = styled.option``;

const Main = styled.div``;
const FiltersButton = styled.button`
  display: none;
  width: 150px;
  background-color: transparent;
  outline: none;
  border: 1px solid #ccc;
  ${mobile({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })}
`;

export const List = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const clicked = useSelector((state) => state.reset.clicked);

  const [filters, setFilters] = useState({
    categoryFilter: [],
    brandFilter: [],
    sizeFilter: [],
    genderFilter: [],
    colorFilter: [],
  });
  let navigate = useNavigate();

  const sp = new URLSearchParams(location.search);
  const category = sp.get('category') || 'all';
  const brand = sp.get('brand') || 'all';
  const status = sp.get('status') || 'all';
  const gender = sp.get('gender') || 'all';
  const size = sp.get('size') || 'all';
  const color = sp.get('color') || 'all';
  const order = sp.get('order') || 'all';

  const [cat, setCat] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setCat({ ...cat, category, brand, gender, size, color, status });
  }, [location]);

  useEffect(() => {
    setPage(1);
  }, [clicked]);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get(
          `products?category=${encodeURIComponent(
            category
          )}&brand=${encodeURIComponent(
            brand
          )}&gender=${gender}&size=${size}&color=${color}&status=${status}&page=${page}&order=${order}`,

          {
            cancelToken: source.token,
          }
        );
        if (isMounted) {
          let ids = res.data.data.map((o) => o._id);
          let stateWithoutDuplicates = products.filter(
            ({ _id }) => !ids.includes(_id)
          );
          clicked
            ? setProducts(res.data.data)
            : setProducts([...stateWithoutDuplicates, ...res.data.data]);
          setHasMore(res.data.data.length === 10 ? true : false);

          const setAllFilters = (data) => {
            setFilters({
              categoryFilter: [
                ...new Set(data.map((item) => item.category).flat()),
              ],
              brandFilter: [...new Set(data.map((item) => item.brand))],
              genderFilter: [...new Set(data.map((item) => item.gender))],
              sizeFilter: [...new Set(data.map((item) => item.size).flat())],
              colorFilter: [...new Set(data.map((item) => item.color).flat())],
            });
          };
          clicked
            ? setAllFilters(res.data.data)
            : products.length > 0
              ? setAllFilters([...products, ...res.data.data])
              : setAllFilters(res.data.data);

          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
          setProducts(null);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };
    getProducts();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [cat, category, brand, gender, size, color, status, page, order]);

  const observer = useRef();
  const lastProdElRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
          dispatch(reset());
          navigate(
            `/list?category=${encodeURIComponent(
              category
            )}&brand=${encodeURIComponent(
              brand
            )}&gender=${gender}&size=${size}&color=${color}&status=${status}&page=${page}&order=${order}`
          );
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const getFiltersUrl = (filter) => {
    const filterCategory = Object.entries(cat).flat().includes(filter.category)
      ? 'all'
      : filter.category || category;
    const filterBrand = Object.entries(cat).flat().includes(filter.brand)
      ? 'all'
      : filter.brand || brand;
    const filterGender = Object.entries(cat).flat().includes(filter.gender)
      ? 'all'
      : filter.gender || gender;
    const filterSize = Object.entries(cat).flat().includes(filter.size)
      ? 'all'
      : filter.size || size;
    const filterColor = Object.entries(cat).flat().includes(filter.color)
      ? 'all'
      : filter.color || color;
    // const filterOrder = filter.order || order

    return `/list?category=${encodeURIComponent(
      filterCategory
    )}&brand=${encodeURIComponent(
      filterBrand
    )}&gender=${filterGender}&size=${filterSize}&color=${filterColor}&order=${order}`;
  };

  const sortByOption = (e) => {
    dispatch(add());
    navigate(
      `/list?category=${encodeURIComponent(
        category
      )}&brand=${encodeURIComponent(
        brand
      )}&gender=${gender}&size=${size}&color=${color}&status=${status}&page=${page}&order=${
        e.target.value
      }`
    );
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper opacity={loading ? 0.5 : 1}>
          <ListFilters
            d={openFilters ? 1 : 0}
            setOpenFilters={setOpenFilters}
            cat={cat}
            setCat={setCat}
            filters={filters}
            getFiltersUrl={getFiltersUrl}
            filterUrl={{
              category,
              brand,
              gender,
              size,
              color,
              status,
            }}
          />

          <ProductsContainer d={openFilters ? 1 : 0}>
            <ListHeader>
              <ListHeaderTop>
                <ListHeadeTitle>
                  {products.length} result
                  {products.length > 1 ? 's' : null}
                  {' are listed for your search'}
                </ListHeadeTitle>
                <FiltersContainer>
                  <FilterBy value={order} onChange={sortByOption}>
                    <FilterByOption value="all">Featured</FilterByOption>
                    <FilterByOption value="new">Newest Arrivals</FilterByOption>
                    <FilterByOption value="low">Price: Low</FilterByOption>
                    <FilterByOption value="high">Price: High</FilterByOption>
                  </FilterBy>
                  <FiltersButton onClick={() => setOpenFilters(true)}>
                    <FilterAlt
                      sx={{
                        color: '#f27a1a',
                        marginRight: '5px',
                        fontSize: '20px',
                      }}
                    />{' '}
                    Filters
                  </FiltersButton>
                </FiltersContainer>
              </ListHeaderTop>
              <ListHeaderBottom>
                {cat &&
                  Object.entries(cat).map(([key, value]) => (
                    <SearchFilterItem
                      getFiltersUrl={getFiltersUrl}
                      key={key}
                      info={cat[key]}
                      ct={key}
                      cat={cat}
                      setCat={setCat}
                    />
                  ))}
              </ListHeaderBottom>
            </ListHeader>
            <Main>
              <Products lastProdElRef={lastProdElRef} products={products} />
            </Main>
          </ProductsContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};
