import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { SearchContext } from '../context/SearchContext';
import { usePagination } from '../context/PaginationContext';

// ✅ Only two categories now
const tableMap = {
  nails: 'nails',
  glasses: 'glasses',
};

const Category = () => {
  const { name } = useParams();
  const { searchTerm } = useContext(SearchContext);

  const {
    products,
    totalPages,
    currentPage,
    fetchProducts,
    nextPage,
    prevPage,
    resetPage,
  } = usePagination();

  const decodedName = decodeURIComponent(name).toLowerCase().trim();
  const tableName = tableMap[decodedName];

  useEffect(() => {
    resetPage();
    if (tableName) {
      fetchProducts(tableName, 1);
    }
  }, [tableName]);

  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      {/* ✅ Centered and single color */}
      <h2
        className="category-title capitalize"
        style={{
          textAlign: 'center',
          fontWeight: '450',
          fontSize: '1.8rem',
          margin: '1.5rem 0',
          color: 'orange', // 💡 your chosen single color
        }}
      >
        {decodedName}
      </h2>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No products found in this category.</p>
      ) : (
        <>
          <div className="grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="pagination" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button
              onClick={() => prevPage(tableName)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              ⬅ Prev
            </button>

            <span className="px-3 text-sm">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => nextPage(tableName)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
