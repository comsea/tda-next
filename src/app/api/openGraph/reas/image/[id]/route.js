export async function GET(req, res) {

    try {
        const response = await fetch(`https://api.tda-archi.com/api/realisations/${res.params.id}`)
        const result = await response.json()
        let imageUrl = `https://api.tda-archi.com/build/images/${result.photo}`
        return new Response(imageUrl, { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response("https://testtda.comsea.fr/images/Footer/Logo-TDA.png", { status: 200 })
    }
}