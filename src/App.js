
import './App.css';
import ProductSection from './components/ProductSection';
import ProductList from './components/ProductList';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VhWX9ZdHxXR2ZaUUA=');

function App() {
  return (
    <div className="App col-12">
      <ProductSection />
      <ProductList />
    </div>
  );
}

export default App;
