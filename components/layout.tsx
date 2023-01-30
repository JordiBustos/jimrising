import Navbar from './navbar'
import NavbarVertical from './navbarVertical'
import Footer from './footer'
//@ts-ignore
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <NavbarVertical />
      <main>{children}</main>
      <Footer />
    </>
  )
}