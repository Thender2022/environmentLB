'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import "./Navbar"

export default function NavLinks() {
    const pathname = usePathname()
 
  return (
    <div className="nav-bar">
        <nav>
        <ul>
            <div>
                <li>  
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    
                </Link>
                </li>
            </div>
            <div>   
                <li>  
                <Link className={`link ${pathname === '/home' ? 'active' : ''}`} href="/pages/home">
                    Home
                </Link>
                </li>
            </div> 
            <div>
                <li>
                <Link className={`link ${pathname === '/shop' ? 'active' : ''}`} href="/pages/shop">
                    Gallery
                </Link>
                </li>
            </div>
            <div>
                <li>
                <Link className={`link ${pathname === '/events' ? 'active' : ''}`} href="/pages/events">
                    Events
                </Link>
                </li>
            </div>
            {/* <div>
                <li>
                <Link className={`link ${pathname === '/gallery' ? 'active' : ''}`} href="/pages/gallery">
                    Gallery
                </Link>
                </li>
            </div> */}
            <div>
                <li>
                <Link className={`link ${pathname === '/collective' ? 'active' : ''}`} href="/pages/collective">
                    Collective
                </Link>
                </li>
            </div>
            <div>
                <li>
                <Link className={`link ${pathname === '/portfolio' ? 'active' : ''}`} href="/pages/portfolio">
                    Portfolio
                </Link>
                </li>
            </div>
        </ul>
        </nav>
    </div>
  )
}