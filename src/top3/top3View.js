function top3View() {
    return /*HTML*/ `
    <div>
    <h2>Top 5 katter:</h2>
    <ul>${list}</ul>
    <h4>Påmeldte katter:</h4>
    <ul>${list2}</ul>
    </div>
    `;
}

// Gjøre om til top 5 med løkke. 