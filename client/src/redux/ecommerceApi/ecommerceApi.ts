import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { userLogin } from "../userSlice/userSlice";
import { CartDTO } from "./types/cart.dto";
import { RootState } from "../store";
import { UserDTO } from "../userSlice/interfaces/user.dto";
import { AllProductsDTO } from "./types/allProducts.dto";

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://ecommerce-store-backend.vercel.app/api/',
  baseUrl: "http://localhost:5000/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user?.accessToken;

    if (token) {
      headers.set("token", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log("sending refresh token");

    const resultRefresh = await baseQuery(
      { url: "/auth/refresh", method: "GET" },
      api,
      extraOptions
    );

    if (resultRefresh?.data) {
      const data = { ...resultRefresh.data } as UserDTO;
      api.dispatch(userLogin(data));
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (resultRefresh?.error?.status === 403) {
        resultRefresh.error.data = "Your login has expired";
      }
      return resultRefresh;
    }
  }

  return result;
};
export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  tagTypes: ["Products", "Orders", "Users", "Categories", "Carts"],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAllProducts: build.query<AllProductsDTO, { order: string }>({
      query: ({ order }) => ({
        url: `products`,
        params: { order },
      }),
      transformResponse: (response: { data: AllProductsDTO }) => response.data,
    }),
    getSearchedProducts: build.query<AllProductsDTO, string>({
      query: (value) => `products?title=${value}`,
      transformResponse: (response: { data: AllProductsDTO }) => response.data,
    }),
    getProduct: build.query({
      query: (id) => `products/${id}`,
    }),
    getAllOrders: build.query({
      query: (userId) => `orders/find/${userId}`,
    }),
    getOrder: build.query({
      query: (id) => `orders/${id}`,
    }),
    getUser: build.query({
      query: (id) => `users/${id}`,
    }),
    getAllCategories: build.query({
      query: () => "products/find/categories",
    }),
    getUserCart: build.query<CartDTO, string>({
      query: (userId: string) => `cart/${userId}`,
    }),
    registerUser: build.mutation({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    loginUser: build.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    updateUser: build.mutation({
      query: ({ credentials, _id }) => ({
        url: `/users/update/${_id}`,
        method: "PUT",
        body: credentials,
      }),
    }),
    createNewOrder: build.mutation({
      query: (body) => ({
        url: `orders`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Orders", id: "LIST" }],
    }),
    addReview: build.mutation({
      query: ({ review, _id, user }) => ({
        url: `products/${_id}/${user._id}/reviews`,
        method: "POST",
        body: review,
      }),
    }),
    addToCart: build.mutation({
      query: ({ data, userId }) => {
        return {
          url: `cart/addto/${userId}`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),
    updateCart: build.mutation({
      query: ({ type, userId, productId }) => {
        return {
          url: `cart/${userId}/product/${productId}/operator`,
          method: "PUT",
          params: { type },
        };
      },
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),
    deleteProductFromCart: build.mutation({
      query: ({ userId, productId }) => {
        return {
          url: `cart/deletefrom/${userId}/product/${productId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Carts", id: "LIST" }],
    }),
  }),
});

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
} = ecommerceApi;
