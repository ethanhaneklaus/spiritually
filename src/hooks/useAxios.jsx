import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl =
    "https://philosophy-quotes-api.glitch.me/quotes/";

export default function useAxios(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function init() {
            if (url.length === 0) {
                return;
            }
            setData(null);
            setError(null);

            try {
                const response = await axios.get(baseUrl + url);
                console.log(response)
                const quotes = response.data.map((val) => ({
                    id: val._id,
                    source: val.source,
                    philosophy: val.philosophy,
                    quote: val.quote,
                }));
                setData(quotes);
                console.log(quotes)
            } catch (e) {
                setError("Something went wrong, please try again later");
                console.log(e)
            }
        }
        init();
    }, [url]);

    return { data, error };
}

