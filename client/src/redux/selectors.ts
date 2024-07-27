import { RootState } from "./store";
import { UserDTO } from "./userSlice/interfaces/user.dto";

export const selectUser = (state: RootState): UserDTO | null => state.user;
export const selectProducts = (state: RootState) => state.cart.products;
export const selectWishlist = (state: RootState) => state.wishlist.products;
