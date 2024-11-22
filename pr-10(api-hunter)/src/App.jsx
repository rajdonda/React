import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes');
        setQuotes(response.data.quotes);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProducts(), fetchQuotes()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (error) return (
    <div className="alert alert-danger m-4" role="alert">
      Error: {error}
    </div>
  );

  return (
    <div className="container py-4" style={{ margin: '20px', border: '2px solid #ccc' }}>
      <h1 className="text-center mb-4">Products Catalog</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm" style={{ border: '2px solid #ccc', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#999'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ccc'}>
              <img
                src={product.thumbnail}
                className="card-img-top zoom-image"
                alt={product.title}
                style={{height: '200px', objectFit: 'cover', transition: 'transform 0.3s', transform: 'scale(0.95)'}}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-primary">${product.price}</span>
                  <span className="badge bg-secondary">{product.category}</span>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">Rating: {product.rating}/5</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center mt-4">Quotes</h2>
      <ul className="list-group">
        {quotes.map(quote => (
          <li key={quote.id} className="list-group-item" style={{ transition: 'background-color 0.5s, color 0.5s' }} 
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'black'; e.currentTarget.style.color = 'white'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}>
            {quote.quote}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
