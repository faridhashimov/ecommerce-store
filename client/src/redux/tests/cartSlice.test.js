import cartReducer, {
    addToCart,
    deleteFromCart,
    increaseQt,
    decreaseQt,
    resetCart,
} from '../cartSlice'

const product = {
    id: '12asf',
    title: 'TShirt',
    productSize: 'XS',
    productColor: 'blue',
    quantity: 1,
}

describe('test cartSlice', () => {
    it('should return default state when we pass an empty action', () => {
        const result = cartReducer(undefined, { type: '' })
        expect(result).toEqual({
            products: [],
        })
    })

    it('should add new product with "addToCard" action', () => {
        const action = { type: addToCart.type, payload: product }
        const result = cartReducer({ products: [] }, action)
        expect(result.products[0].id).toEqual('12asf')
        expect(result.products[0].title).toEqual('TShirt')
        expect(result.products[0].productSize).toEqual('XS')
        expect(result.products[0].productColor).toEqual('blue')
        expect(result.products[0].quantity).toEqual(1)
    })

    it('should increase product by id, color and size with "increaseQt" action', () => {
        const action = {
            type: increaseQt.type,
            payload: { id: '12asf', productColor: 'blue', productSize: 'XS' },
        }
        const result = cartReducer({ products: [product] }, action)
        expect(result.products[0].quantity).toBe(2)
    })

    it('shouldn\'t increase product by id, color and size with "increaseQt" action', () => {
        const action = {
            type: increaseQt.type,
            payload: { id: '12asf', productColor: 'red', productSize: 'XS' },
        }
        const result = cartReducer({ products: [product] }, action)
        expect(result.products[0].quantity).toBe(1)
    })

    it('should decrease product by id, color and size with "decreaseQt" action', () => {
        const action = {
            type: decreaseQt.type,
            payload: { id: '12asf', productColor: 'blue', productSize: 'XS' },
        }
        const result = cartReducer({ products: [product] }, action)
        expect(result.products[0].quantity).toBe(0)
    })

    it('shouldn\'t decrease product by id, color and size with "decreaseQt" action', () => {
        const action = {
            type: decreaseQt.type,
            payload: { id: '12asf', productColor: 'red', productSize: 'XS' },
        }
        const result = cartReducer({ products: [product] }, action)
        expect(result.products[0].quantity).toBe(1)
    })

    it('should delete product by id, color and size with "deleteFromCart" action', () => {
        const action = {
            type: deleteFromCart.type,
            payload: { id: '12asf', productColor: 'blue', productSize: 'XS' },
        }
        const result = cartReducer({ products: [product] }, action)
        expect(result).toEqual({ products: [] })
    })

    it('should resete products state with "deleteFromCart" action', () => {
        const action = {
            type: resetCart.type,
            payload: undefined,
        }
        const result = cartReducer({ products: [] }, action)
        expect(result).toEqual({ products: [] })
    })
})
