export async function GET(req, res) {
    try {
        const response = await fetch(`https://apitda.comsea.fr/api/actualites/${id}`)
        let imageUrl = "http://localhost:3000/images/Footer/Logo-TDA.png"
        if (1 === 1) {
            imageUrl = "https://apitda.comsea.fr/build/images/634082665146a73a09d5a2c63141d3c155dad50f.png"
        }
        return new Response(imageUrl, { status: 200 })
    } catch (err) {
        return new Response("http://localhost:3000/images/Footer/Logo-TDA.png", { status: 200 })
    }
}