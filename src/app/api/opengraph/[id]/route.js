export async function GET(req, res) {

    try {
        await fetch(`https://apitda.comsea.fr/api/actualites/${res.params.id}`)
        .then((response) => response.json())
        .then((result) => {
            result;
        })
        imageUrl = `https://apitda.comsea.fr/build/images/${result.photo}`
        return new Response(imageUrl, { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response("https://testtda.comsea.fr/images/Footer/Logo-TDA.png", { status: 200 })
    }
}