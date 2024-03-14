export async function GET(req, res) {

    try {
        const response = await fetch(`https://apitda.comsea.fr/api/actualites/${res.params.id}`)
        const result = await response.json()
        let imageUrl = `https://apitda.comsea.fr/build/images/${result.photo}`
        let titleUrl = result.title
        return new Response([imageUrl, titleUrl], { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response("https://testtda.comsea.fr/images/Footer/Logo-TDA.png", { status: 200 })
    }
}