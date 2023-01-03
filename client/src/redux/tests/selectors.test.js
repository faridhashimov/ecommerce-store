import { selectUser, selectProducts, selectWishlist } from '../selectors'

describe('test redux selectors', () => {
    it('should select user data from state object', () => {
        const user = {
            accessToken: 'eyJhbGciOiJ',
            _id: '62826113f81c05252ab38d3a',
            username: 'farid',
        }
        const result = selectUser({ user: { user } })
        expect(result).toEqual(user)
    })

    it('should select products from product state object', () => {
        const products = [
            { id: '1234', title: 'TShirt', size: 'XS', color: 'red' },
        ]
        const result = selectProducts({ cart: { products } })
        expect(result).toEqual(products)
    })

    it('should select products from wishlist state object', () => {
        const products = [
            { id: '1234', title: 'TShirt', size: 'XS', color: 'red' },
        ]
        const result = selectWishlist({ wishlist: { products } })
        expect(result).toEqual(products)
    })
})
