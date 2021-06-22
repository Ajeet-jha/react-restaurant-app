import Header from './Header'
import Footer from './Header'

function index({children}) {
    return (
        <main>
            <Header />
                {children}
            <Footer />
        </main>
    )
}

export default index