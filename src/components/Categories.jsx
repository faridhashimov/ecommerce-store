import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { useAxios } from '../hooks/useAxios'
import { Spinner, CategoryPopup } from '../components'

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
`
const AllCategories = styled.div`
    position: relative;
    a {
        padding: 0px;
    }
`
const CategoriesList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    position: relative;
    a {
        padding: 0;
    }
`
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
`
//=================================================

const CategoryListContainer = styled.div`
    /* box-shadow: 0px 100px 440px 100px rgba(34, 60, 80, 0.39); */
    box-shadow: 2px 200px 400px 200px rgba(0, 0, 0, 0.22);
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: ${(props) => (props.popup ? 'block' : 'none')};
    position: absolute;
    top: 43.5px;
    transition: all 0.3s ease-in;
    z-index: 1000;
    padding: 10px;
    height: 300px;
    width: 1100px;
`

const CategoryListInfo = styled.div`
    display: flex;
    padding: 0px 20px;
`
const CategoryList = styled.ul`
    list-style: none;
    margin: 0px 30px 0px 0px;
`
const CategoryListItem = styled.li`
    a {
        padding: 0px;
        text-transform: none;
        font-size: 13px;
        font-weight: 400;
        color: #666;
        /* border-bottom: 1px solid #fff; */
        transition: all 0.2s ease-in;
        &:hover {
            color: #f27a1a;
            text-decoration: underline;
            transition: all 0.2s ease-in;
        }
    }
    &:first-child {
        font-weight: 500;
        font-size: 15px;
        color: #333;
    }
`
const StyledLink = styled(Link)``
// const CategoryListInfo = styled.ul``

const Categories = ({ openShop }) => {
    const [openCategories, setOpenCategories] = useState(false)
    const [cat, setCat] = useState('')
    const [categories, setCategories] = useState({})

    const onOpenCategoryList = (cat) => {
        setOpenCategories(true)
        setCat(cat)
    }

    const { loading, error, data } = useAxios(
        'http://localhost:5000/api/products/find/categories'
    )

    useEffect(() => {
        setCategories(data)
    }, [data])

    return (
        <CategoriesContainer state={openShop}>
            <AllCategories>
                <CategoriesList
                    onMouseLeave={() => {
                        setOpenCategories(false)
                        setCat('')
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
                        loading={loading}
                        error={error}
                        categories={categories}
                        popup={openCategories}
                    />
                </CategoriesList>
            </AllCategories>
        </CategoriesContainer>
    )
}

// const CategoryPopup = ({ popup, cat, loading, error, categories }) => {
//     console.log(categories?.womensClothing)
//     const getFiltersUrl = (filters) => {
//         const category = filters.category
//         const gender = filters.gender || 'all'

//         return `/list?category=${encodeURIComponent(category)}&gender=${gender}`
//     }
//     return (
//         <CategoryListContainer popup={popup}>
//             {loading ? (
//                 <Spinner />
//             ) : error ? (
//                 <p style={{ color: 'red' }}>Something went wrong</p>
//             ) : (
//                 <>
//                     {cat === 'Women' ? (
//                         <CategoryListInfo>
//                             <CategoryList>
//                                 <CategoryListItem>Clothing</CategoryListItem>
//                                 {categories?.womensClothing?.map((item) => (
//                                     <CategoryListItem key={item}>
//                                         <StyledLink
//                                             to={getFiltersUrl({
//                                                 category: item,
//                                                 gender: 'Women',
//                                             })}
//                                         >
//                                             {item}
//                                         </StyledLink>
//                                     </CategoryListItem>
//                                 ))}
//                             </CategoryList>
//                             <CategoryList>
//                                 <CategoryListItem>Shoes</CategoryListItem>
//                                 {categories?.womensShoes
//                                     ?.filter((i) => i !== 'Shoes')
//                                     .map((item) => (
//                                         <CategoryListItem key={item}>
//                                             <StyledLink
//                                                 to={getFiltersUrl({
//                                                     category: item,
//                                                     gender: 'Women',
//                                                 })}
//                                             >
//                                                 {item}
//                                             </StyledLink>
//                                         </CategoryListItem>
//                                     ))}
//                             </CategoryList>
//                         </CategoryListInfo>
//                     ) : cat === 'Men' ? (
//                         <CategoryListInfo>
//                             <CategoryList>
//                                 <CategoryListItem>Clothing</CategoryListItem>
//                                 {categories?.mensClothing?.map((item) => (
//                                     <CategoryListItem key={item}>
//                                         <StyledLink
//                                             to={getFiltersUrl({
//                                                 category: item,
//                                                 gender: 'Men',
//                                             })}
//                                         >
//                                             {item}
//                                         </StyledLink>
//                                     </CategoryListItem>
//                                 ))}
//                             </CategoryList>
//                             <CategoryList>
//                                 <CategoryListItem>Shoes</CategoryListItem>
//                                 {categories?.mensShoes
//                                     ?.filter((i) => i !== 'Shoes')
//                                     .map((item) => (
//                                         <CategoryListItem key={item}>
//                                             <StyledLink
//                                                 to={getFiltersUrl({
//                                                     category: item,
//                                                     gender: 'Men',
//                                                 })}
//                                             >
//                                                 {item}
//                                             </StyledLink>
//                                         </CategoryListItem>
//                                     ))}
//                             </CategoryList>
//                         </CategoryListInfo>
//                     ) : cat === 'Kids' ? (
//                         <CategoryListInfo>
//                             <CategoryList>
//                                 <CategoryListItem>Boys</CategoryListItem>
//                                 {categories?.boys
//                                     ?.filter((i) => i !== 'Kids')
//                                     .map((item) => (
//                                         <CategoryListItem key={item}>
//                                             <StyledLink
//                                                 to={getFiltersUrl({
//                                                     category: item,
//                                                     gender: 'Boys',
//                                                 })}
//                                             >
//                                                 {item}
//                                             </StyledLink>
//                                         </CategoryListItem>
//                                     ))}
//                             </CategoryList>
//                             <CategoryList>
//                                 <CategoryListItem>Girls</CategoryListItem>
//                                 {categories?.girls
//                                     ?.filter((i) => i !== 'Kids')
//                                     .map((item) => (
//                                         <CategoryListItem key={item}>
//                                             <StyledLink
//                                                 to={getFiltersUrl({
//                                                     category: item,
//                                                     gender: 'Girls',
//                                                 })}
//                                             >
//                                                 {item}
//                                             </StyledLink>
//                                         </CategoryListItem>
//                                     ))}
//                             </CategoryList>
//                         </CategoryListInfo>
//                     ) : cat === 'Accessories' ? (
//                         <CategoryListInfo>
//                             <CategoryList>
//                                 <CategoryListItem>
//                                     Women's Accessories
//                                 </CategoryListItem>
//                                 {categories?.wAccessories
//                                     ?.filter((i) => i !== "Women's Accessories")
//                                     .map((item) => (
//                                         <CategoryListItem key={item}>
//                                             <StyledLink
//                                                 to={`/list?category=${encodeURIComponent(
//                                                     item
//                                                 )}&gender=Women`}
//                                             >
//                                                 {item}
//                                             </StyledLink>
//                                         </CategoryListItem>
//                                     ))}
//                             </CategoryList>
//                             <CategoryList>
//                                 <CategoryListItem>
//                                     Men's Accessories
//                                 </CategoryListItem>
//                                 {categories?.mAccessories
//                                     ?.filter((i) => i !== "Men's Accessories")
//                                     .map((item) => (
//                                         <CategoryListItem key={item}>
//                                             <StyledLink
//                                                 to={`/list?category=${encodeURIComponent(
//                                                     item
//                                                 )}&gender=Men`}
//                                             >
//                                                 {item}
//                                             </StyledLink>
//                                         </CategoryListItem>
//                                     ))}
//                             </CategoryList>
//                         </CategoryListInfo>
//                     ) : (
//                         <CategoryListInfo>
//                             <CategoryList>
//                                 <CategoryListItem>Bathroom</CategoryListItem>
//                                 <CategoryListItem>Tshirts</CategoryListItem>
//                                 <CategoryListItem>Skirts</CategoryListItem>
//                                 <CategoryListItem>Shirt</CategoryListItem>
//                                 <CategoryListItem>Shorts</CategoryListItem>
//                                 <CategoryListItem>Pants</CategoryListItem>
//                                 <CategoryListItem>
//                                     Coats & Jackets
//                                 </CategoryListItem>
//                                 <CategoryListItem>Hoodies</CategoryListItem>
//                                 <CategoryListItem>Sweatshirts</CategoryListItem>
//                             </CategoryList>
//                             <CategoryList>
//                                 <CategoryListItem>Lightning</CategoryListItem>
//                                 <CategoryListItem>Loafers</CategoryListItem>
//                                 <CategoryListItem>Sandals</CategoryListItem>
//                                 <CategoryListItem>
//                                     Strappy Sandals
//                                 </CategoryListItem>
//                                 <CategoryListItem>Sneakers</CategoryListItem>
//                             </CategoryList>
//                         </CategoryListInfo>
//                     )}
//                 </>
//             )}
//         </CategoryListContainer>
//     )
// }

export default Categories
