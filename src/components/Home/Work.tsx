import Arrow from "../../assets/icons/Arrow"
import Locked from "../../assets/icons/Locked"
import "../../assets/styles/home.css"
import imgOne from "../../assets/images/img-1.jpg"
import imgTwo from "../../assets/images/img-2.jpg"
import imgThree from "../../assets/images/img-3.jpg"
import imgFour from "../../assets/images/img-4.jpg"
import "../../assets/styles/home.css"
import { Link } from "react-router-dom"

type WorkProps = {
    img: string
    workName: string
    available: boolean
    to?: string
}

function Work({ img, workName, available, to }: WorkProps) {
    return (
        <Link to={`/projects/${to}`} className="work">
            <div className="work__work_img">
                <img src={img} alt={workName} />
            </div>
            <div className="work__work_img_overlay">
                <div className="work__work_info">
                    <p className="work__work_info__work_title">{workName}</p>
                    <div
                        className={`work__work_info__work_icon ${
                            available && "available"
                        }`}
                    >
                        {available ? <Arrow /> : <Locked />}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default function Works() {
    return (
        <section className="works">
            <div>
                <Work img={imgOne} workName="Test case one" available={true} />
                <Work img={imgTwo} workName="Test case two" available={false} />
            </div>
            <div>
                <Work
                    img={imgThree}
                    workName="Test case three"
                    available={false}
                />
                <Work
                    img={imgFour}
                    workName="Test case four"
                    available={true}
                />
            </div>
        </section>
    )
}
