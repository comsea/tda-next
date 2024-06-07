export async function GET(req, res) {

    try {
        const response = await fetch(`https://api.tda-archi.com/api/actualites/${res.params.id}`)
        const result = await response.json()
        let imageUrl = `https://api.tda-archi.com/build/images/${result.photo}`
        return new Response(imageUrl, { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response("https://www.tda-archi.com/images/Footer/Logo-TDA.png", { status: 200 })
    }
}