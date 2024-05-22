import "../../assets/styles/profile.css"

type WorkProps = {
    workType: string
    duration: string
    firm: string
    position: string
}

export default function Work({
    workType,
    duration,
    position,
    firm,
}: WorkProps) {
    return (
        <div className="work">
            <div className="work__job_duration">
                <p>{duration}</p>
            </div>
            <div className="work__firm_name">
                <p>{firm}</p>
            </div>
            <div className="work__position">
                <p>{position}</p>
            </div>
            <div className="work__job_title">
                <p>{workType}</p>
            </div>
        </div>
    )
}
