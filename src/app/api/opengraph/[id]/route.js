export async function GET(req, res) {

    try {
        const response = await fetch(`https://apitda.comsea.fr/api/actualites/${res.params.id}`)
        const result = await response.json()
        let imageUrl = `https://apitda.comsea.fr/build/images/${result.photo}`
        let titleUrl = result.title
        let descUrl = result.description
        let data = {
            imageUrl: imageUrl,
            titleUrl: titleUrl,
            descUrl: descUrl
        }

        console.log(data.imageUrl)
        return new Response(JSON.stringify(data), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (err) {
        console.log(err)
        return new Response("https://testtda.comsea.fr/images/Footer/Logo-TDA.png", { status: 200 })
    }
}