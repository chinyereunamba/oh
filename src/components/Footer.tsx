import "../assets/styles/layout.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>&copy; Chinyere Unamba 2024</p>
            </div>
            <div className="footer__footer_btn">
                Adapted from{" "}
                <a href="https://oh.studio" target="_blank">
                    OH.STUDIO
                </a>
            </div>
            <ul className="footer__footer_links">
                <li>
                    <a href="https://x.com/chinyere_un" target="_blank">
                        Twitter
                    </a>
                </li>
                <li>
                    <a
                        href="https://linkedin.com/in/chinyereunamba"
                        target="_blank"
                    >
                        Linkedin
                    </a>
                </li>
                <li>
                    <a href="mailto:cunamba2@gmail.com" target="_blank">
                        Mail
                    </a>
                </li>
            </ul>
        </footer>
    )
}
