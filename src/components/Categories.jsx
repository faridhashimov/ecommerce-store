import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'

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
    a {
        padding: 0px;
    }
`
const CategoriesList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    position: relative;
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
    box-shadow: 2px 200px 400px 200px rgba(0,0,0,0.22);
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: ${(props) => (props.popup ? 'block' : 'none')};
    position: absolute;
    bottom: -232.5px;
    right: -12px;
    transition: all 0.3s ease-in;
    z-index: 1000;
    padding: 10px;
    height: 210px;
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

    const onOpenCategoryList = (cat) => {
        setOpenCategories(true)
        setCat(cat)
    }
    // console.log(cat)

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
                    <CategoryPopup cat={cat} popup={openCategories} />
                </CategoriesList>
            </AllCategories>
        </CategoriesContainer>
    )
}

const CategoryPopup = ({ popup, cat }) => {
    return (
        <CategoryListContainer popup={popup}>
            {/* <Wrapper> */}
            {cat === 'Women' ? (
                <CategoryListInfo>
                    <CategoryList>
                        <CategoryListItem>Clothing</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=T-shirts&gender=Women">
                                T-shirts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Skirts&gender=Women">
                                Skirts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Shirts&gender=Women">
                                Shirts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Shorts&gender=Women">
                                Shorts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Pants&gender=Women">
                                Pants
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink
                                to={`/list?category=${encodeURIComponent(
                                    'Coats & Jackets'
                                )}&gender=Women`}
                            >
                                Coats & Jackets
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Hoodies&gender=Women">
                                Hoodies
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Sweatshirts&gender=Women">
                                Sweatshirts
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListItem>Shoes</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Loafers&gender=Women">
                                Loafers
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Sandals&gender=Women">
                                Sandals
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink
                                to={`/list?category=${encodeURIComponent(
                                    'Strappy Sandals'
                                )}&gender=Women`}
                            >
                                Strappy Sandals
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Sneakers&gender=Women">
                                Sneakers
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                </CategoryListInfo>
            ) : cat === 'Men' ? (
                <CategoryListInfo>
                    <CategoryList>
                        <CategoryListItem>Clothing</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=T-shirts&gender=Men">
                                T-shirts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Skirts&gender=Men">
                                Skirts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Shirts&gender=Men">
                                Shirts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Shorts&gender=Men">
                                Shorts
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Pants&gender=Men">
                                Pants
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink
                                to={`/list?category=${encodeURIComponent(
                                    'Coats & Jackets'
                                )}&gender=Men`}
                            >
                                Coats & Jackets
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Hoodies&gender=Men">
                                Hoodies
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Sweatshirts&gender=Men">
                                Sweatshirts
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListItem>Shoes</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Loafers&gender=Men">
                                Loafers
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink
                                to={`/list?category=${encodeURIComponent(
                                    'Sandals & Flip Flops'
                                )}&gender=Men`}
                            >
                                Sandals & Flip Flops
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Sneakers&gender=Men">
                                Sneakers
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                </CategoryListInfo>
            ) : cat === 'Kids' ? (
                <CategoryListInfo>
                    <CategoryList>
                        <CategoryListItem>Boys</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Shirts&gender=Boys">
                                Shirts
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListItem>Girls</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=T-shirts&gender=Girls">
                                T-shirts
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                </CategoryListInfo>
            ) : cat === 'Accessories' ? (
                <CategoryListInfo>
                    <CategoryList>
                        <CategoryListItem>Women's Accessories</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Jevelry&gender=Women">
                                Jevelry
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Earrings&gender=Women">
                                Earrings
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Hats&gender=Women">
                                Hats
                            </StyledLink>
                        </CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Bags&gender=Women">
                                Bags
                            </StyledLink>
                        </CategoryListItem>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListItem>Men's Accessories</CategoryListItem>
                        <CategoryListItem>
                            <StyledLink to="/list?category=Bags&gender=Men">
                                Bags
                            </StyledLink>
                        </CategoryListItem>
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
                        <CategoryListItem>Coats & Jackets</CategoryListItem>
                        <CategoryListItem>Hoodies</CategoryListItem>
                        <CategoryListItem>Sweatshirts</CategoryListItem>
                    </CategoryList>
                    <CategoryList>
                        <CategoryListItem>Lightning</CategoryListItem>
                        <CategoryListItem>Loafers</CategoryListItem>
                        <CategoryListItem>Sandals</CategoryListItem>
                        <CategoryListItem>Strappy Sandals</CategoryListItem>
                        <CategoryListItem>Sneakers</CategoryListItem>
                    </CategoryList>
                </CategoryListInfo>
            )}
            {/* </Wrapper> */}
        </CategoryListContainer>
    )
}

export default Categories
