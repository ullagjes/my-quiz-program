//USED IN PRE MADE QUIZ PAGE
export async function getMovieQs(){
    try {
        return fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple')
        .then((response) => response.json())

    } catch(error){
        console.log('error when fetching movie qs', error)
    }
}

