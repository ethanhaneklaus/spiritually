import React from "react";

function QuoteDisplay({ isFavorite, add, remove, phrase }) {
    const { source, philosophy, _id, quote } = phrase;
    return (
        <div className="gif my-4 px-2 col-6 col-md-4 col-lg-3 d-flex flex-column justify-content-between">
            <h5 className="text-center">{quote}</h5>
            <h5 className="text-center">{source}</h5>
            <h5 className="text-center">{philosophy}</h5>
            {isFavorite && (
                <button
                    onClick={() => remove(_id)}
                    className="mt-4 btn btn-danger d-block mx-auto"
                >
                    Remove Favorite
                </button>
            )}
            {!isFavorite && (
                <button
                    onClick={() => add(phrase)}
                    className="mt-4 btn btn-success d-block mx-auto"
                >
                    Add Favorite
                </button>
            )}
        </div>
    );
}

export default QuoteDisplay;