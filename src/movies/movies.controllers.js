const moviesDB = [
    {
        id: 1,
        title: "Pinocchio",
        description:
            "Academy Award®-winning director Guillermo del Toro and award-winning, stop-motion legend Mark Gustafson reimagine the classic Carlo Collodi tale of the fabled wooden boy with a whimsical tour de force that finds Pinocchio on an enchanted adventure that transcends worlds and reveals the life-giving power of love.",
        year: 2022,
        director: "Guillermo del Toro, Mark Gustafson",
    },
    {
        id: 2,
        title: "Inglourious Basterds",
        description:
            "It is the first year of Germany's occupation of France. Allied officer Lt. Aldo Raine (Brad Pitt) assembles a team of Jewish soldiers to commit violent acts of retribution against the Nazis, including the taking of their scalps. He and his men join forces with Bridget von Hammersmark, a German actress and undercover agent, to bring down the leaders of the Third Reich. Their fates converge with theater owner Shosanna Dreyfus, who seeks to avenge the Nazis' execution of her family.",
        year: 2009,
        director: " Quentin Tarantino",
    },
    {
        id: 3,
        title: "DJANGO UNCHAINED",
        description:
            "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave.",
        year: 2013,
        director: " Quentin Tarantino",
    },
];

let movieId = 4;

const findAllMovies = async () => {
    return moviesDB;
};

const findMovieById = async (id) => {
    const movie = moviesDB.find((movieItem) => movieItem.id === id);
    return movie;
};

const createMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || "Untitled",
        description: movieObj.description || null,
        year: movieObj.year || 1980,
        director: movieObj.director || "Anonymous",
    };
    moviesDB.push(newMovie);
    return newMovie;
};

const updateMovie = async (movieId, movieObj) => {
    const updatedMovie = {
        id: movieId,
        title: movieObj.title || "Untitled",
        description: movieObj.description || null,
        year: movieObj.year || 1980,
        director: movieObj.director || "Anonymous",
    };

    for (let i = 0; i < moviesDB.length; i++) {
        if (moviesDB[i].id === movieId) {
            moviesDB.splice(i, 1, updatedMovie);
        }
    }

    return moviesDB;
};

const removeMovie = async (movieId) => {
    let removed = false;

    for (let i = 0; i < moviesDB.length; i++) {
        if (moviesDB[i].id === movieId) {
            moviesDB.splice(i, 1);
            removed = true;
        }
    }

    const data = { removed, moviesDB };

    return data;
};

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    removeMovie,
};
