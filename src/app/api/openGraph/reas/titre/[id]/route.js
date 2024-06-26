export async function GET(req, res) {

    try {
        const response = await fetch(`https://api.tda-archi.com/api/realisations/${res.params.id}`)
        const result = await response.json()
        let titleUrl = result.title
        return new Response(titleUrl, { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response("https://www.tda-archi.com/images/Footer/Logo-TDA.png", { status: 200 })
    }
}