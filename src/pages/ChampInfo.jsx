import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderBar from "../components/HeaderBar"
import '../styles/ChampInfo.css'
import { Carousel } from "flowbite-react"
import Spells from "../components/Spells"
import Skins from "../components/Skins"
import Section from "../components/Section"

const ChampInfo = () => {

    const [ChampInfo, setChampInfo] = useState([])

    useEffect(()=>{
        fetch(`https://ddragon.leagueoflegends.com/cdn/14.4.1/data/en_US/champion/${id}.json`)
        .then(res => res.json())
        .then(data => setChampInfo(Object.values(data.data)))

    },[])

    const {id} = useParams()
    return(
        <section className="overflow-hidden bg-[#010A13] min-h-screen">
            <HeaderBar />
            {ChampInfo.map(info => {
                return (
                    <div key={info.id} className="flex flex-col items-center text-zinc-50 mt-16 pb-16">
                        <div className="relative w-full flex items-center justify-center">
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt={`image og ${info.name}`} className="absolute w-screen z-10 blur-xl scale-110 background_champ"/>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt={`image og ${info.name}`} className="mt-8 z-20 champ_image"/>
                        </div>
                            <div className="flex flex-col items-center gap-8 container max-w-7xl">
                                <Section title={'Overview'}>
                                <div className="font-bold flex flex-col items-center">
                                    <p className="uppercase text-3xl">{info.title}</p>
                                    <h1 className="text-9xl italic uppercase">{info.name}</h1>                       
                                    <div className="uppercase flex items-center">
                                    {info.tags.map((tag, index) => (
                                        <div key={index} className="flex flex-col items-center mx-4 mt-8">
                                            <img src={`../../public/tags/${tag}.png`} alt={tag} className="size-12" />
                                            <p className="text-[#C8AA6E]">{tag}</p>
                                        </div>
                                    ))}
                                    </div>
                                    <p className="text-pretty text-center font-medium text-base mt-10">{info.lore}</p>
                                </div>
                                </Section>
                                <Section title={'Abilities'}>
                                    <div className="w-full flex items-center">
                                    <Spells 
                                    passive={info.passive.image.full}
                                    SpellQ={info.spells[0].id}
                                    spellW={info.spells[1].id}
                                    spellE={info.spells[2].id}
                                    spellR={info.spells[3].id}
                                    Pname={info.passive.name}
                                    Wname={info.spells[0].name}
                                    Qname={info.spells[1].name}
                                    Ename={info.spells[2].name}
                                    Rname={info.spells[3].name}
                                    descriptionP={info.passive.description}
                                    descriptionQ={info.spells[0].description}
                                    descriptionW={info.spells[1].description}
                                    descriptionE={info.spells[2].description}
                                    descriptionR={info.spells[3].description}
                                    />
                                    </div>
                                </Section>
                                <Section title={'Available Skins'}>
                                <div className="h-[717px] w-[1000px]">
                                            <Carousel pauseOnHover>
                                            {info.skins.map((skin, index) => (
                                                <img key={index} src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${info.id}_${skin.num}.jpg`} alt={`Skin number ${skin.num} of ${info.name}`} className="h-full object-cover"/>
                                            ))}
                                            </Carousel>
                                        </div>
                                </Section>
                              
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ChampInfo