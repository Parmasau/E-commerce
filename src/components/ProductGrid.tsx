import ProductCard from "./ProductCard";

const ProductGrid = () => {
  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 128,
      isNew: false,
      isSale: true,
    },
    {
      id: "2",
      name: "Smart Watch Series 8",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 256,
      isNew: true,
      isSale: false,
    },
    {
      id: "3",
      name: "Professional Camera Lens",
      price: 899.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      isNew: false,
      isSale: true,
    },
    {
      id: "4",
      name: "Minimalist Desk Lamp",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 67,
      isNew: false,
      isSale: false,
    },
    {
      id: "5",
      name: "Luxury Leather Wallet",
      price: 89.99,
      originalPrice: 120.00,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 143,
      isNew: false,
      isSale: true,
    },
    {
      id: "6",
      name: "Wireless Charging Pad",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 92,
      isNew: true,
      isSale: false,
    },
    {
      id: "7",
      name: "Premium Coffee Maker",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 178,
      isNew: false,
      isSale: false,
    },
    {
      id: "8",
      name: "Bluetooth Speaker",
      price: 129.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 234,
      isNew: false,
      isSale: true,
    },
  ];

  return (
    <section className="py-16 bg-background" data-section="products">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed to enhance your lifestyle
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-shop-primary to-shop-primary-light text-white font-semibold rounded-lg hover:shadow-[var(--shadow-button)] hover:scale-105 transition-all duration-300"
            onClick={() => {
              alert('Loading more products...');
            }}
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;