import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userLogin } from '../userSlice'

const baseQuery = fetchBaseQuery({
    // baseUrl: 'https://ecommerce-store-backend.vercel.app/api/',
    baseUrl: 'http://localhost:5000/api/',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().user?.user?.accessToken

        if (token) {
            headers.set('token', `Bearer ${token}`)
        }

        return headers
    },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 403) {
        console.log('sending refresh token')

        const resultRefresh = await baseQuery(
            { url: '/auth/refresh', method: 'GET' },
            api,
            extraOptions
        )

        if (resultRefresh?.data) {
            api.dispatch(userLogin({ ...resultRefresh.data }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            if (resultRefresh?.error?.status === 403) {
                resultRefresh.error.data.message = 'Your login has expired'
            }
            return resultRefresh
        }
    }

    return result
}
export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    tagTypes: ['Products', 'Orders', 'Users', 'Categories', 'Carts'],
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: ({ order }) => ({
                url: `products`,
                params: { order },
            }),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Products', id })),
                          { type: 'Products', id: 'LIST' },
                      ]
                    : [{ type: 'Products', id: 'LIST' }],
            transformResponse: (response) => response.data,
        }),
        getSearchedProducts: build.query({
            query: (value) => `products?title=${value}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Products', id })),
                          { type: 'Products', id: 'LIST' },
                      ]
                    : [{ type: 'Products', id: 'LIST' }],
            transformResponse: (response) => response.data,
        }),
        getProduct: build.query({
            query: (id) => `products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Products', id }],
        }),
        getAllOrders: build.query({
            query: (userId) => `orders/find/${userId}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Orders', id })),
                          { type: 'Orders', id: 'LIST' },
                      ]
                    : [{ type: 'Orders', id: 'LIST' }],
        }),
        getOrder: build.query({
            query: (id) => `orders/${id}`,
            providesTags: (result, error, id) => [{ type: 'Orders', id }],
        }),
        getUser: build.query({
            query: (id) => `users/${id}`,
            providesTags: (result, error, id) => [{ type: 'Users', id }],
        }),
        getAllCategories: build.query({
            query: () => 'products/find/categories',
            providesTags: (result, error, id) => [{ type: 'Categories', id }],
        }),
        getUserCart: build.query({
            query: (userId) => `cart/${userId}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.products.map(({ id }) => ({
                              type: 'Carts',
                              id,
                          })),
                          { type: 'Carts', id: 'LIST' },
                      ]
                    : [{ type: 'Carts', id: 'LIST' }],
        }),
        registerUser: build.mutation({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        loginUser: build.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        updateUser: build.mutation({
            query: ({ credentials, _id }) => ({
                url: `/users/update/${_id}`,
                method: 'PUT',
                body: credentials,
            }),
        }),
        createNewOrder: build.mutation({
            query: (body) => ({
                url: `orders`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
        }),
        addReview: build.mutation({
            query: ({ review, _id, user }) => ({
                url: `products/${_id}/${user._id}/reviews`,
                method: 'POST',
                body: review,
            }),
        }),
        addToCart: build.mutation({
            query: ({ data, userId }) => {
                return {
                    url: `cart/addto/${userId}`,
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: [{ type: 'Carts', id: 'LIST' }],
        }),
        updateCart: build.mutation({
            query: ({ type, userId, productId }) => {
                return {
                    url: `cart/${userId}/product/${productId}/operator`,
                    method: 'PUT',
                    params: { type },
                }
            },
            invalidatesTags: [{ type: 'Carts', id: 'LIST' }],
        }),
        deleteProductFromCart: build.mutation({
            query: ({ userId, productId }) => {
                return {
                    url: `cart/deletefrom/${userId}/product/${productId}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: [{ type: 'Carts', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useGetSearchedProductsQuery,
    useGetOrderQuery,
    useGetAllOrdersQuery,
    useGetProductQuery,
    useGetAllCategoriesQuery,
    useGetUserQuery,
    useLazyGetUserCartQuery,
    useLoginUserMutation,
    useRegisterUserMutation,
    useUpdateUserMutation,
    useAddReviewMutation,
    useCreateNewOrderMutation,
    useAddToCartMutation,
    useUpdateCartMutation,
    useDeleteProductFromCartMutation,
} = ecommerceApi
