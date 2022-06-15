import {
    Typography,
    Box,
    styled,
    TextField,
    Select,
    MenuItem,
} from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Error, ProductItem, Spinner } from '../components'
import useFetch from '../hooks/useFetch'

const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
})
const AddNew = styled(Link)({
    padding: '5px 10px',
    textTransform: 'none',
    textDecoration: 'none',
    borderRadius: '5px',
    border: '1px solid green',
    backgroundColor: 'transparent',
    color: 'green',
    '&:hover': {
        backgroundColor: '#f7f7f7',
    },
})

const Container = styled(Box)({
    minHeight: '100vh',
    padding: '30px',
})

const FiltersContainer = styled(Box)(({ theme }) => ({
    padding: '20px',
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    fontWeight: '500',
    fontSize: '20px',
    color: '#9a9a9a',
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'space-between',
}))

const ProductsGrid = styled(FiltersContainer)({
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '10px',
})

const Products = () => {
    const [category, setCategory] = useState('All category')
    const [order, setOrder] = useState('Newest')
    const [products, setProducts] = useState(null)

    const { loading, error, data } = useFetch(
        'http://localhost:5000/api/products'
    )

    useEffect(() => {
        setProducts(data)
    }, [data])

    console.log(loading)
    console.log(products)

    const onCategoryChange = (event) => {
        setCategory(event.target.value)
    }
    const onOrderChange = (event) => {
        setOrder(event.target.value)
    }

    return (
        <Container>
            <Header>
                <Typography
                    color={{ color: '#9a9a9a' }}
                    variant="h5"
                    fontWeight={500}
                >
                    Products
                </Typography>
                <AddNew to="/products/new" variant="outlined">
                    Add New
                </AddNew>
            </Header>
            <FiltersContainer>
                <TextField
                    size="small"
                    sx={{ width: '400px' }}
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Search..."
                />
                <Box>
                    <Select
                        size="small"
                        value={category}
                        onChange={onCategoryChange}
                        sx={{ marginRight: '15px' }}
                    >
                        <MenuItem value="All category">All category</MenuItem>
                        <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                        <MenuItem value="Shorts">Shorts</MenuItem>
                        <MenuItem value="Shoes">Shoes</MenuItem>
                        <MenuItem value="Coats & Jackets">
                            Coats & Jackets
                        </MenuItem>
                    </Select>
                    <Select size="small" value={order} onChange={onOrderChange}>
                        <MenuItem value="Newest">Newest</MenuItem>
                        <MenuItem value="Price Low">Low</MenuItem>
                        <MenuItem value="Price High">High</MenuItem>
                    </Select>
                </Box>
            </FiltersContainer>
            {loading && <Spinner />}
            {error && <Error/>}
            {products && (
                <ProductsGrid>
                    {products.map((product) => (
                        <ProductItem key={product._id} product={product} />
                    ))}
                </ProductsGrid>
            )}
        </Container>
    )
}

export default Products
