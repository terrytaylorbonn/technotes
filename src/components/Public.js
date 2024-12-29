import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>technotes frontend ch12 24.1229 07:21 <span className="nowrap">test site</span></h1>
            </header>
            <main className="public__main">
                <p>TT React (MERN) test site.</p>
                <address className="public__addr">
                    addr1<br />
                    addr2<br />
                    city, CA 12345<br />
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