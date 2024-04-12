import React, { useState } from "react";
import '../styles/Filter.css'

const FilterComponent = ({tags, onFilterChange}) => {

    const [selectedTags, setSelectedTags] = useState([])

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(prevTags => prevTags.filter(selectedTag => selectedTag !== tag));
        } else {
            setSelectedTags(prevTags => [...prevTags, tag]);
        }
    }

    React.useEffect(()=>{
        onFilterChange(selectedTags)
    },[selectedTags, onFilterChange])

    return(
        <div className="flex justify-center gap-4">
            {tags.map(tag => (
                <button
                    key={tag}
                    className={`px-4 py-2 relative font-bold uppercase filter ${selectedTags.includes(tag) ? 'text-gray-950 filter_active' : ' text-[#A09B8C]'}`}
                    onClick={() => handleTagClick(tag)}
                >{tag}</button>
            ))}
        </div>
    )
}

export default FilterComponent