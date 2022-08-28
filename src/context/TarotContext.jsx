import { propTypes } from "react-bootstrap/esm/Image";
import cards from "./cards/tarot-images.json"

export default function card({
    const jsonData = require("./cards/tarot-images.json");
    console.log(jsonData);

try {
    fetch("./cards/tarot-images.json")
        .then(response => {
            return response.json("name", "img", "archetype", "element", "arcana", "keywords", "meaning", "mythical/spiritual", "questions  to ask");
        })
        .then(jsondata => console.log(jsondata));
    if (response.data.success) {
        console.log("fetch");
    } else {
        console.log(response.data.error);
    }
} catch (err) { }
    }, []);

return (
    <TarotContext.Provider value={jsonData}>
        {propTypes.children}
    </TarotContext.Provider>
);



// const tarotDeck = [
//     "./cards/ar00.jpg",
//     "./cards/ar01.jpg",
//     "./cards/ar02.jpg",
//     "./cards/ar03.jpg",
//     "./cards/ar04.jpg",
//     "./cards/ar05.jpg",
//     "./cards/ar06.jpg",
//     "./cards/ar07.jpg",
//     "./cards/ar08.jpg",
//     "./cards/ar09.jpg",
//     "./cards/ar10.jpg",
//     "./cards/ar11.jpg",
//     "./cards/ar12.jpg",
//     "./cards/ar13.jpg",
//     "./cards/ar14.jpg",
//     "./cards/ar15.jpg",
//     "./cards/ar16.jpg",
//     "./cards/ar17.jpg",
//     "./cards/ar18.jpg",
//     "./cards/ar19.jpg",
//     "./cards/ar20.jpg",
//     "./cards/ar21.jpg",
//     "./cards/cu02.jpg",
//     "./cards/cu03.jpg",
//     "./cards/cu04.jpg",
//     "./cards/cu05.jpg",
//     "./cards/cu06.jpg",
//     "./cards/cu07.jpg",
//     "./cards/cu08.jpg",
//     "./cards/cu09.jpg",
//     "./cards/cu10.jpg",
//     "./cards/cuac.jpg",
//     "./cards/cuki.jpg",
//     "./cards/cukn.jpg",
//     "./cards/cupa.jpg",
//     "./cards/cuqu.jpg",
//     "./cards/pe02.jpg",
//     "./cards/pe03.jpg",
//     "./cards/pe04.jpg",
//     "./cards/pe05.jpg",
//     "./cards/pe06.jpg",
//     "./cards/pe07.jpg",
//     "./cards/pe08.jpg",
//     "./cards/pe09.jpg",
//     "./cards/pe10.jpg",
//     "./cards/peac.jpg",
//     "./cards/peki.jpg",
//     "./cards/pekn.jpg",
//     "./cards/pepa.jpg",
//     "./cards/pequ.jpg",
//     "./cards/sw02.jpg",
//     "./cards/sw03.jpg",
//     "./cards/sw04.jpg",
//     "./cards/sw05.jpg",
//     "./cards/sw06.jpg",
//     "./cards/sw07.jpg",
//     "./cards/sw08.jpg",
//     "./cards/sw09.jpg",
//     "./cards/sw10.jpg",
//     "./cards/swac.jpg",
//     "./cards/swki.jpg",
//     "./cards/swkn.jpg",
//     "./cards/swpa.jpg",
//     "./cards/swqu.jpg",
//     "./cards/wa02.jpg",
//     "./cards/wa03.jpg",
//     "./cards/wa04.jpg",
//     "./cards/wa05.jpg",
//     "./cards/wa06.jpg",
//     "./cards/wa07.jpg",
//     "./cards/wa08.jpg",
//     "./cards/wa09.jpg",
//     "./cards/wa10.jpg",
//     "./cards/waac.jpg",
//     "./cards/waki.jpg",
//     "./cards/wakn.jpg",
//     "./cards/wapa.jpg",
//     "./cards/waqu.jpg",
// ]

