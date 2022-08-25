import React, { useContext, useEffect, useMemo, useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { QuoteContext } from "../context/QuoteContext";
import useAxios from "../hooks/useAxios";
import QuoteDisplay from "./QuoteDisplay";
import Form from 'react-bootstrap/Form';

function QuotePage() {
    const [url, setUrl] = useState("");
    const { favorites, add, remove } = useContext(FavoritesContext);
    const [philosophy, setPhilosophy] = useState("null");
    const [author, setAuthor] = useState("null");
    const { quoteResults, setQuoteResults } = useContext(QuoteContext);
    const { data: quotes, error, quote } = useAxios(url);
    const faveIDs = useMemo(
        () => favorites.map((val) => val._id),
        [favorites]
    );

    useEffect(() => {
        if (quote) {
            setQuoteResults(quote);
        }
    }, [quote, setQuoteResults]);


    return (
        <div>
            <div className="text">
                <h1>Quote Generator</h1>
            </div>
            <div className="flex">
                <Form.Select
                    aria-label="Default select example"
                    id="philosophy"
                    value="philosophy"
                    onChange={(e) => setPhilosophy(e.target.value)}
                >
                    <option>Philosophy Type</option>
                    <option value="ClassNameical Greek">ClassNameical Greek</option>
                    <option value="Empiricism">Empiricism</option>
                    <option value="Existentialism">Existentialism</option>
                    <option value="Mysticism">Mysticism</option>
                    <option value="Rationalism">Rationalism</option>
                    <option value="Stoicism">Stoicism</option>
                    <option value="Transcendentalism">Transcendentalism</option>
                </Form.Select>
                <button
                    type="submit"
                    id="philsub"
                    onClick={(e) => { setUrl(`philosophy/${philosophy}`); }}
                    className="btn-blue"
                >
                    Submit
                </button>

                <Form.Select
                    value="author"
                    onChange={(e) => setAuthor(e.target.value)}
                    aria-label="Default select example"
                    id="author"
                >
                    <option>Author</option>
                    <option value="Alan Watts">Alan Watts</option>
                    <option value="Aristotle">Aristotle</option>
                    <option value="Baruch Spinoz">Baruch Spinoz</option>
                    <option value="Carl G. Jung">Carl G. Jung</option>
                    <option value="Christopher McCandless">Christopher McCandless</option>
                    <option value="David Hume">David Hume</option>
                    <option value="Epictetus">Epictetus</option>
                    <option value="Fredrich Nietzsche">Fredrich Nietzsche</option>
                    <option value="Fyodor Dostoyevsky">Fyodor Dostoyevsky</option>
                    <option value="George Berkeley">George Berkeley</option>
                    <option value="Henry David Thoreau">Henry David Thoreau</option>
                    <option value="Jean-Paul Sartre">Jean-Paul Sartre</option>
                    <option value="John Locke">John Locke</option>
                    <option value="Leibniz">Leibniz</option>
                    <option value="Marcus Aurelius">Marcus Aurelius</option>
                    <option value="Plato">Plato</option>
                    <option value="Ralph Waldo Emerson">Ralph Waldo Emerson</option>
                    <option value="Rene Descartes">Rene Descartes</option>
                    <option value="Rumi">Rumi</option>
                    <option value="Seneca">Seneca</option>
                </Form.Select>
                <button
                    type="submit"
                    id="authsub"
                    onClick={(e) => { setUrl(`author/${author}`); }}
                    className="btn-blue"
                >
                    Submit
                </button>
            </div>

            <div className="col-12 d-flex flex-wrap mt-4">
                {error && error}
                {quotes &&
                    quotes.length > 0 &&
                    quoteResults.map((q) => (
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