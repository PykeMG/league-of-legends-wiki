import { useEffect, useState } from "react"
import '../styles/Spells.css'


const Spells = ({passive, SpellQ, spellW, spellE, spellR, descriptionP, descriptionQ, descriptionW, descriptionE, descriptionR, Pname, Qname, Wname, Ename, Rname}) => {

    const [currentDescription, setCurrentDescription] = useState(descriptionP)
    const [currentName, setCurrentName] = useState(Pname)
    const [key, setKey] = useState('Passive')

    const handleDescription = (des, name, key) => {
        setCurrentDescription(des)
        setCurrentName(name)
        setKey(key)
    }

    useEffect(() => {
        setCurrentDescription(descriptionP)
        setCurrentName(Pname)
        setKey('Passive')
    },[descriptionP, Pname])

    return(
        <section className="h-[410px] p-8">
            <nav className="gap-2 cursor-pointer items-center inline-flex">
                <div className={currentDescription === descriptionP ? "selected" : "notSelected"}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/passive/${passive}`} alt={Pname} 
                    onClick={() => handleDescription(descriptionP, Pname, 'Passive')}/>
                </div>
                <div className={currentDescription === descriptionQ ? "selected" : "notSelected"}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${SpellQ}.png`} alt={Qname} 
                    onClick={() => handleDescription(descriptionQ, Qname, 'Q')}/>
                </div>
                <div className={currentDescription === descriptionW ? "selected" : "notSelected"}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spellW}.png`} alt={Wname} 
                    onClick={() => handleDescription(descriptionW, Wname, 'W')}/>
                </div>
                <div className={currentDescription === descriptionE ? "selected" : "notSelected"}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spellE}.png`} alt={Ename} 
                    onClick={() => handleDescription(descriptionE, Ename, 'E')}/>
                </div>
                <div className={currentDescription === descriptionR ? "selected" : "notSelected"}>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spellR}.png`} alt={Rname} 
                    onClick={() => handleDescription(descriptionR, Rname, 'R')}/>
                </div>
            </nav>
            <div className="font-bold flex flex-col gap-2 mt-4 description max-w-[700px]">
                <span className="text-[#3C3C41] uppercase text-lg">{key}</span>
                <h3 className="text-2xl uppercase">{currentName}</h3>
                <p className="font-normal" dangerouslySetInnerHTML={{ __html: currentDescription }} />
            </div>
        </section>
    )
}

export default Spells