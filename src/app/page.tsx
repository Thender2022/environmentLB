import Link from 'next/link';
import Image from 'next/image';
import gif from '@/assets/gif.gif'; // Ensure this path is correct



function LandingPage() {
    return (
        <Link href="/pages/home" className="landing-logo">
            <Image src={gif} height={600} width={600} alt="EnvironmentLB Logo" />
            
        </Link>
    );
}

export default LandingPage;

