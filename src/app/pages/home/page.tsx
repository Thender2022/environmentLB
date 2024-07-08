import Image from "next/image";



export default function HomePage() {
    return (
        <div className="display-position">
            <div className="home-intro-box">
                <div className="intro-display">
                    <div className="img-intro-box">
                        <h1>Image Box</h1>
                    </div>
                    <h1>This is the intro section</h1>
                </div>
            </div>

            {/* Events Container */}

            <div className="home-events-box">
                <div className="events-display">
                    <div className="img-events-box">
                        <h1>Image Box</h1>
                    </div>
                    <h1>This is the event Section</h1>
                </div>
            </div>

            {/* Gallery Conatiner */}

            <div className="home-gallery-box">
                <div className="gallery-display">
                    <div className="img-gallery-box">
                        <h1>Image Box</h1>
                    </div>
                    <h1>This is the gallery Section</h1>
                </div>
            </div>

            {/* Collective Cntainer */}

            <div className="home-collective-box">
                <div className="collective-display">
                    <div className="img-collective-box">
                        <h1>Image Box</h1>
                    </div>
                    <h1>This is the collective Section</h1>
                </div>
            </div>

            {/* Portfolio Cntainer */}

            <div className="home-portfolio-box">
                <div className="portfolio-display">
                    <div className="img-portfolio-box">
                        <h1>Image Box</h1>
                    </div>
                    <h1>This is the portfolio Section</h1>
                </div>
            </div>
        </div>
    )
}