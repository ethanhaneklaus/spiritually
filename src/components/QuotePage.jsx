import React, { useContext, useEffect, useMemo, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { QuoteContext } from "../context/QuoteContext";
import useAxios from "../hooks/useAxios";
import QuoteDisplay from "./QuoteDisplay";

function QuotePage() {
    const [url, setUrl] = useState("");
    const { favorites, add, remove } = useContext(FavoritesContext);
    const [philosophy, setPhilosophy] = useState("null");
    const [author, setAuthor] = useState("null");
    const { searchResults, setSearchResults } = useContext(QuoteContext);
    const { data: quotes, error, quote } = useAxios(url);
    const faveIDs = useMemo(
        () => favorites.map((val) => val._id),
        [favorites]
    );

    useEffect(() => {
        if (quote) {
            setSearchResults(quote);
        }
    }, [quote, setSearchResults]);

    return (
        <div>
            <hd1>Quote Generator</hd1>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="philosophy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Philosophy
                </button>
                <div class="dropdown-menu" onChange={(e) => setPhilosophy(e.target.value)}>
                    <a class="dropdown-item" href="#">Classical Greek</a>
                    <a class="dropdown-item" href="#">Empiricism</a>
                    <a class="dropdown-item" href="#">Existentialism</a>
                    <a class="dropdown-item" href="#">Mysticism</a>
                    <a class="dropdown-item" href="#">Rationalism</a>
                    <a class="dropdown-item" href="#">Stoicism</a>
                    <a class="dropdown-item" href="#">Transcendentalism</a>
                </div>

                <button class="btn btn-secondary dropdown-toggle" type="button" id="author" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Author
                </button>
                <div class="dropdown-menu" onChange={(e) => setAuthor(e.target.value)}>
                    <a class="dropdown-item" href="#">Alan Watts</a>
                    <a class="dropdown-item" href="#">Aristotle</a>
                    <a class="dropdown-item" href="#">Baruch Spinoz</a>
                    <a class="dropdown-item" href="#">Carl G. Jung</a>
                    <a class="dropdown-item" href="#">Christopher McCandless</a>
                    <a class="dropdown-item" href="#">David Hume</a>
                    <a class="dropdown-item" href="#">Epictetus</a>
                    <a class="dropdown-item" href="#">Fredrich Nietzsche</a>
                    <a class="dropdown-item" href="#">Fyodor Dostoyevsky</a>
                    <a class="dropdown-item" href="#">George Berkeley</a>
                    <a class="dropdown-item" href="#">Henry David Thoreau</a>
                    <a class="dropdown-item" href="#">Jean-Paul Sartre</a>
                    <a class="dropdown-item" href="#">John Locke</a>
                    <a class="dropdown-item" href="#">Leibniz</a>
                    <a class="dropdown-item" href="#">Marcus Aurelius</a>
                    <a class="dropdown-item" href="#">Plato</a>
                    <a class="dropdown-item" href="#">Ralph Waldo Emerson</a>
                    <a class="dropdown-item" href="#">Rene Descartes</a>
                    <a class="dropdown-item" href="#">Rumi</a>
                    <a class="dropdown-item" href="#">Seneca</a>
                </div>
            </div>
            <button
                type="submit"
                id="querybutton"
                onclick={(e) => { setUrl(`${philosophy}&${author}`); }}
            >
            </button>
            <div className="col-12 d-flex flex-wrap mt-4">
                {error && error}
                {quotes &&
                    quotes.length > 0 &&
                    searchResults.map((q) => (
                        <QuoteDisplay
                            quote={q}
                            key={q._id}
                            add={add}
                            remove={remove}
                            isFavorite={faveIDs.includes(q._id)}
                        />
                    ))}
                {quotes && quotes.length === 0 && (
                    <h3 className="text-center col-12">No results found</h3>
                )}
            </div>
        </div>
    );
}

export default QuotePage;
