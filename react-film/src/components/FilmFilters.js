function movieFilters(library, setList, setFilter) {

    const filterAll = () => {
        // setList(library.getMovies());
        setFilter("All");
    }

    const filterFavorite = () => {
        // setList([...library.getMovies().filter(m => m.isFavorite)]);
        setFilter("Favorite");
    }

    const filterBestRated = () => {
        // setList([...library.getMovies().filter(m => m.rating === 5)]);
        setFilter("Best Rated");
    }

    const filterLastMonth = () => {
        // setList([...library.getMovies().filter(m => dayjs().isAfter(dayjs().subtract(1, 'month')))]);
        setFilter("Seen since Last Month");
    }

    const filterUnseen = () => {
        // setList([...library.getMovies().filter(m => m.dateWatched === undefined)]);
        setFilter("Unseen");
    }

    return [filterAll, filterFavorite, filterBestRated, filterLastMonth, filterUnseen];
}

export { movieFilters }

