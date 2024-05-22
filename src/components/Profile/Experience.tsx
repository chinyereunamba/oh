import "../../assets/styles/profile.css"
import Work from "./Work"
export default function Experience() {
    return (
        <section className="experience">
            <div className="experience__title title">
                <p>Experience</p>
                <div className="experience__title__subtitle">
                    <h2>Where I&apos;ve worked</h2>
                </div>
            </div>
            <div className="experience__jobs_done">
                <Work
                    duration="2017 — Present"
                    firm="OH.STUDIO"
                    workType="Director"
                    position="Freelance Designer"
                />
                <Work
                    duration="2017 — Present"
                    firm="OH.STUDIO"
                    workType="Director"
                    position="Freelance Designer"
                />
                <Work
                    duration="2017 — Present"
                    firm="OH.STUDIO"
                    workType="Director"
                    position="Freelance Designer"
                />
                <Work
                    duration="2017 — Present"
                    firm="OH.STUDIO"
                    workType="Director"
                    position="Freelance Designer"
                />
            </div>
        </section>
    )
}
