import Products from '../components/Products'

export default function ProductsPage() {
  return (
    <main>
      <section style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Our Artisan Collection
          </h1>
          <Products />
        </div>
      </section>
    </main>
  )
}
