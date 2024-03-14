export async function generateMetadata(req, res) {
    const id = req.params.id
    const responseIMG = await fetch(`https://testtda.comsea.fr/api/openGraph/actus/image/${id}`)
    const responseTitle = await fetch(`https://testtda.comsea.fr/api/openGraph/actus/titre/${id}`)
    const responseDesc = await fetch(`https://testtda.comsea.fr/api/openGraph/actus/description/${id}`)
    const imageUrl = await responseIMG.text();
    const titleUrl = await responseTitle.text()
    const descUrl = await responseDesc.text()
    return {
        openGraph: {
            images : imageUrl,
            url: `https://testtda.comsea.fr/actualites/${id}`,
            title: titleUrl,
            description: descUrl,
        },
    };
}

export default function Layout({ req, children }) {
    return <>{children}</>;
  }