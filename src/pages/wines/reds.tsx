import type { NextPage } from "next";
import { Error, Loading } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine"

const RedWinePage: NextPage = () => {
    const { data, error } = useWineData('whites');

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <div>
        <h1>Wine</h1>
        <main>
            {data.map((wineData: Wine)=>{
                const { id, wine, winery } = wineData;

                return (
                    <div key={`port-wine-list-${id}`}>
                    <h1>{wine}</h1>
                    <p>{winery}</p>
                    </div>
                )
            })}
        </main>
        </div>
    );
};

export default RedWinePage;