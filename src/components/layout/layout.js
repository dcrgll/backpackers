import PropTypes from 'prop-types'
import Footer from '../foooter'

export default function Layout ({ children, background }) {
  return (
    <>
      <header className="h-12 bg-red-400 sticky top-0"></header>
      <main className={`${background}`}>
        <div className="container mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired
}
