import Image from "next/image";


export default function CollectivePage() {
    return (
        <div className="collective-page">
            <div className="collective-page-title">
                <h1>Explore our Collective</h1>
            </div>
            <div className="collective-page-img">
                <Image 
                    src="/grass.jpg"
                    width={400}
                    height={400}
                    alt="Collective picture"
                />
            </div>
            <div className="collective-artists-container">
                <div className="featured-artists">
                    <h1>Checkout the artists in our Collective</h1>
                </div>

            </div>
        </div>
        
    )
}