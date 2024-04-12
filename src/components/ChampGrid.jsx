import { Link } from "react-router-dom"
import '../styles/ChampGrid.css'
const ChampGrid = ({ id, name, tags, image}) => {
    return(
            <Link to={`champions/${id}`} key={id} className="relative overflow-hidden champgrid after:rotate-45 after:translate-x-1/2 after:-translate-y-1/2 hover:after:p-0 duration-500 ease-in-out after:duration-300 after:bg-slate-50 sm:h-[300px] lg:h-[390px]">
                <img 
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${image}_0.jpg` } 
                alt={name}
                className='champ_image'/>
                <div className="bg-[#061c25] text-slate-50 w-full absolute py-3 px-3 left-0 bottom-0 champname">
                    <h2 className="pl-1 text-xl lg:text-2xl uppercase font-bold italic">{name}</h2>
                </div>
            </Link>
    )
}

export default ChampGrid