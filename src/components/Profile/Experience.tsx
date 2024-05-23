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
                    duration="2016 — 2017"
                    firm="OH.STUDIO"
                    workType="Freelancer"
                    position="Freelance Designer"
                />
                <Work
                    duration="2015 — 2016"
                    firm="Lovely World"
                    workType="Permanent"
                    position="Senior Designer"
                />
                <Work
                    duration="2017 — Present"
                    firm="Lovely World"
                    workType="Permanent"
                    position="Junior Designer"
                />
            </div>
        </section>
    )
}
