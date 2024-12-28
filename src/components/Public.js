import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome ch10 24.1228 11:43 to <span className="nowrap">the test site</span></h1>
            </header>
            <main className="public__main">
                <p>React (MERN) test site.</p>
                <address className="public__addr">
                    aaaaaaaaa<br />
                    aaaaaaaaaaaa<br />
                    ccccc City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: xxxxxxxxxx</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public