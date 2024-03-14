export async function GET(req, res) {

    try {
        const response = await fetch(`https://apitda.comsea.fr/api/actualites/${res.params.id}`)
        const result = await response.json()
        let descUrl = result.description
        return new Response(descUrl, { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response("https://testtda.comsea.fr/images/Footer/Logo-TDA.png", { status: 200 })
    }
}