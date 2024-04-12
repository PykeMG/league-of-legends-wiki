import Lol_Icon from '../assets/LoL_Icon_Flat_GOLD.svg'
import { Link } from "react-router-dom"

const HeaderBar = () => {
    return(
            <header className='bg-[#010A13] w-full px-8 py-3 flex items-center text-zinc-50 border-b-4 border-b-[#C89B3C] z-50 absolute top-0 left-0'>
                <img src={Lol_Icon} alt="Logo" className='size-12' />
                <nav className='ml-10 uppercase'>
                        <Link to={`/`}>
                            <h1>Champions</h1>
                        </Link>
                </nav>
            </header>
    )
}

export default HeaderBar