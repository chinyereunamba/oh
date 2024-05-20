import "../../assets/styles/home.css"

export default function Intro() {
    return (
        <section className="intro">
            <h1>A brand and product designer working with clients globally</h1>
            <div className="intro__tag_group">
                <span className="intro__tag_group__tag_title">Expertise </span>
                <div>
                    <span className="intro__tag_group__tag">Branding</span>
                    <span className="intro__tag_group__tag">Product</span>
                    <span className="intro__tag_group__tag">
                        Design Systems
                    </span>
                </div>
            </div>
        </section>
    )
}
