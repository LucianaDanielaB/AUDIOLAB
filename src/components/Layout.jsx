import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children, cartCount, setCurrentPage }) {
  return (
    <>
      <Header />

      <Navbar
        cartCount={cartCount}
        setCurrentPage={setCurrentPage}
      />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout