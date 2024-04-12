import { useState, useEffect } from "react";
import { allChampApi } from "../Api/AllApi";
import ChampGrid from "../components/ChampGrid";
import SearchBar from "../components/SearchBar";
import FilterComponent from "../components/FilterComponent";
import HeaderBar from "../components/HeaderBar";

const Home = () => {

    const [champs, setChamps] = useState([])
    const [query, setQuery] = useState("")
    const [filteredTags, setFilteredTags] = useState([])

    useEffect(() => {

        fetch(allChampApi)
        .then(res => res.json())
        .then(data => 
            setChamps(Object.values(data.data))
        )

    },[]);
    
    const filteredChamps = champs.filter(champion => champion.name.toLowerCase().includes(query.toLowerCase()) && (filteredTags.length === 0 || filteredTags.every(tag => champion.tags.includes(tag))))

    const handleFilterChange = (tags) => {
        setFilteredTags(tags)
    }

    return(
        <section className="bg-slate-50 min-h-screen text-gray-950 w-full flex flex-col items-center text-pretty">
            <HeaderBar />
            <h2 className="mt-32 mb-10 uppercase font-semibold italic text-center text-xl">Choose your <br /> <span className="text-8xl font-bold">Champion</span></h2>
            <p className="mb-10 max-w-[500px] text-center text-pretty">With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.</p>
            <header className="w-full py-4 flex items-center container mx-auto px-8 text-sm mb-10 border border-gray-950/30 justify-between">
                <SearchBar query={query} setQuery={setQuery} text={'Search'}/>
                <FilterComponent tags={['Tank', 'Fighter', 'Mage', 'Assassin', 'Marksman', 'Support']} onFilterChange={handleFilterChange}/>
            </header>
            <div className="container px-10 grid grid-cols-2 sm:grid-cols-3 items-center justify-center lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto">
            {filteredChamps.map(champ => {
                return(
                    <ChampGrid 
                        key={champ.id} 
                        id={champ.id} 
                        name={champ.name} 
                        tags={champ.tags} 
                        image={champ.id}
                    />
                )
            })}
            </div>
       </section>
    )
}

export default Home;