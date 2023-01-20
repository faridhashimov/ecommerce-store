import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    tagTypes: ['Products', 'Orders', 'Users', 'Categories'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ecommerce-store-backend.vercel.app/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user?.user?.accessToken

            if (token) {
                headers.set('token', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => `products`,
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
    useLoginUserMutation,
    useRegisterUserMutation,
    useUpdateUserMutation,
} = ecommerceApi
