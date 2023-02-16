import {createBrowserRouter,RouterProvider,/*createRoutesFromElements,Route*/} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';
const router=createBrowserRouter([
  {path:'/',element:<Root/>,
    errorElement:<Error/>,
    children:[
    { path: '/', element: <Home /> },
    { path: '/products', element: <Products /> }
  ]},
])
// const routeDefinition=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/products' element={<Products />} />
//   </Route>
// );
// const router=createBrowserRouter(routeDefinition);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
