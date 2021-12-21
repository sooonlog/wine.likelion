import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const WhiteWinePage: NextPage = () => {
    const name = 'whites';
    const { data, error } = useWineData(name);

    if(error) return <Error />
    if(!data) return <Loading />
    
    return (
        <div>
            <h1>Whites Wine</h1>
            <main>
                {data.map((wineData: Wine) => {
                    return (
                        <WineCard
                            key={`whites-wine-list${wineData.id}`}
                            wineData={wineData}
                        />
                    )
                })}
            </main>
        </div>
    )
}

export default WhiteWinePage;