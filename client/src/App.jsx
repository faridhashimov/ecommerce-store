import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Homepage,
  About,
  Faq,
  Login,
  Contact,
  Error404,
  Cart,
  Success,
  Profile,
  List,
  Orders,
  SingleOrder,
  Productpage,
  WishList,
  UserInfo,
} from './pages';
import { selectUser } from './redux/selectors';
import { ScrollToTop } from './components';

function App() {
  const user = useSelector(selectUser);
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="login"
              element={user ? <Navigate to={'/'} /> : <Login />}
            />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<Productpage />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
            <Route
              path="success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />
            <Route path="profile/*" element={<Profile />}>
              <Route
                path="orders/*"
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                }
              />
              <Route
                path="orders/:id"
                element={
                  <ProtectedRoute>
                    <SingleOrder />
                  </ProtectedRoute>
                }
              />
              <Route
                path="userInfo"
                element={
                  <ProtectedRoute>
                    <UserInfo />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="list" element={<List />}>
              {/* <Route path="products" element={<Products />} /> */}
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
