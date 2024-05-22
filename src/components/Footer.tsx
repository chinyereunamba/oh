import "../assets/styles/layout.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>&copy; Chinyere Unamba 2024</p>
            </div>
            <div className="footer__footer_btn">shop</div>
            <ul className="footer__footer_links">
                <li>
                    <a href="https://x.com/chinyere_un">Twitter</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/chinyereunamba">
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="mailto:cunamba2@gmail.com">Mail</a>
                </li>
            </ul>
        </footer>
    )
}
