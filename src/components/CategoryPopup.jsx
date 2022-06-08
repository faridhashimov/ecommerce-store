import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Spinner } from '../components'
import { add, reset } from '../redux/resetSlice'

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

const CategoryPopup = ({ popup, cat, loading, error, categories }) => {
    const dispatch = useDispatch()
    const getFiltersUrl = (filters) => {
        const category = filters.category
        const gender = filters.gender || 'all'

        return `/list?category=${encodeURIComponent(category)}&gender=${gender}`
    }

    return (
        <CategoryListContainer popup={popup}>
            {loading ? (
                <Spinner />
            ) : error ? (
                <p style={{ color: 'red' }}>Something went wrong</p>
            ) : (
                <>
                    {cat === 'Women' ? (
                        <CategoryListInfo>
                            <CategoryList>
                                <CategoryListItem>Clothing</CategoryListItem>
                                {categories?.womensClothing?.map((item) => (
                                    <CategoryListItem key={item}>
                                        <StyledLink
                                            to={getFiltersUrl({
                                                category: item,
                                                gender: 'Women',
                                            })}
                                        >
                                            {item}
                                        </StyledLink>
                                    </CategoryListItem>
                                ))}
                            </CategoryList>
                            <CategoryList>
                                <CategoryListItem>Shoes</CategoryListItem>
                                {categories?.womensShoes
                                    ?.filter((i) => i !== 'Shoes')
                                    .map((item) => (
                                        <CategoryListItem key={item}>
                                            <StyledLink
                                                to={getFiltersUrl({
                                                    category: item,
                                                    gender: 'Women',
                                                })}
                                            >
                                                {item}
                                            </StyledLink>
                                        </CategoryListItem>
                                    ))}
                            </CategoryList>
                        </CategoryListInfo>
                    ) : cat === 'Men' ? (
                        <CategoryListInfo>
                            <CategoryList>
                                <CategoryListItem>Clothing</CategoryListItem>
                                {categories?.mensClothing?.map((item) => (
                                    <CategoryListItem key={item}>
                                        <StyledLink
                                            to={getFiltersUrl({
                                                category: item,
                                                gender: 'Men',
                                            })}
                                        >
                                            {item}
                                        </StyledLink>
                                    </CategoryListItem>
                                ))}
                            </CategoryList>
                            <CategoryList>
                                <CategoryListItem>Shoes</CategoryListItem>
                                {categories?.mensShoes
                                    ?.filter((i) => i !== 'Shoes')
                                    .map((item) => (
                                        <CategoryListItem key={item}>
                                            <StyledLink
                                                to={getFiltersUrl({
                                                    category: item,
                                                    gender: 'Men',
                                                })}
                                            >
                                                {item}
                                            </StyledLink>
                                        </CategoryListItem>
                                    ))}
                            </CategoryList>
                        </CategoryListInfo>
                    ) : cat === 'Kids' ? (
                        <CategoryListInfo>
                            <CategoryList>
                                <CategoryListItem>Boys</CategoryListItem>
                                {categories?.boys
                                    ?.filter((i) => i !== 'Kids')
                                    .map((item) => (
                                        <CategoryListItem key={item}>
                                            <StyledLink
                                                to={getFiltersUrl({
                                                    category: item,
                                                    gender: 'Boys',
                                                })}
                                            >
                                                {item}
                                            </StyledLink>
                                        </CategoryListItem>
                                    ))}
                            </CategoryList>
                            <CategoryList>
                                <CategoryListItem>Girls</CategoryListItem>
                                {categories?.girls
                                    ?.filter((i) => i !== 'Kids')
                                    .map((item) => (
                                        <CategoryListItem key={item}>
                                            <StyledLink
                                                to={getFiltersUrl({
                                                    category: item,
                                                    gender: 'Girls',
                                                })}
                                            >
                                                {item}
                                            </StyledLink>
                                        </CategoryListItem>
                                    ))}
                            </CategoryList>
                        </CategoryListInfo>
                    ) : cat === 'Accessories' ? (
                        <CategoryListInfo>
                            <CategoryList>
                                <CategoryListItem>
                                    Women's Accessories
                                </CategoryListItem>
                                {categories?.wAccessories
                                    ?.filter((i) => i !== "Women's Accessories")
                                    .map((item) => (
                                        <CategoryListItem key={item}>
                                            <StyledLink
                                                to={`/list?category=${encodeURIComponent(
                                                    item
                                                )}&gender=Women`}
                                            >
                                                {item}
                                            </StyledLink>
                                        </CategoryListItem>
                                    ))}
                            </CategoryList>
                            <CategoryList>
                                <CategoryListItem>
                                    Men's Accessories
                                </CategoryListItem>
                                {categories?.mAccessories
                                    ?.filter((i) => i !== "Men's Accessories")
                                    .map((item) => (
                                        <CategoryListItem key={item}>
                                            <StyledLink
                                                to={`/list?category=${encodeURIComponent(
                                                    item
                                                )}&gender=Men`}
                                            >
                                                {item}
                                            </StyledLink>
                                        </CategoryListItem>
                                    ))}
                            </CategoryList>
                        </CategoryListInfo>
                    ) : (
                        <CategoryListInfo>
                            <CategoryList>
                                <CategoryListItem>Bathroom</CategoryListItem>
                                <CategoryListItem>Tshirts</CategoryListItem>
                                <CategoryListItem>Skirts</CategoryListItem>
                                <CategoryListItem>Shirt</CategoryListItem>
                                <CategoryListItem>Shorts</CategoryListItem>
                                <CategoryListItem>Pants</CategoryListItem>
                                <CategoryListItem>
                                    Coats & Jackets
                                </CategoryListItem>
                                <CategoryListItem>Hoodies</CategoryListItem>
                                <CategoryListItem>Sweatshirts</CategoryListItem>
                            </CategoryList>
                            <CategoryList>
                                <CategoryListItem>Lightning</CategoryListItem>
                                <CategoryListItem>Loafers</CategoryListItem>
                                <CategoryListItem>Sandals</CategoryListItem>
                                <CategoryListItem>
                                    Strappy Sandals
                                </CategoryListItem>
                                <CategoryListItem>Sneakers</CategoryListItem>
                            </CategoryList>
                        </CategoryListInfo>
                    )}
                </>
            )}
        </CategoryListContainer>
    )
}

export default CategoryPopup
