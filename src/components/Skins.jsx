import { useEffect, useState } from "react"

export default function Skins({name, skins}) {


    console.log(name,skins)

    return(
        <section>
            {skins?.slice(1).map((skin) => {
                return(
                    <div key={skin?.num}>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin?.num}.jpg`} alt="" />
                    </div>
                )
            })}
        </section>
    )
}
