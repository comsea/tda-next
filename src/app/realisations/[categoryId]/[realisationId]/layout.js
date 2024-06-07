export async function generateMetadata(req, res) {
    const id = req.params.realisationId
    const responseIMG = await fetch(`https://www.tda-archi.com/api/openGraph/reas/image/${id}`)
    const responseTitle = await fetch(`https://www.tda-archi.com/api/openGraph/reas/titre/${id}`)
    const imageUrl = await responseIMG.text();
    const titleUrl = await responseTitle.text()
    return {
        openGraph: {
            images : imageUrl,
            title: titleUrl,
            description: 'Venez consulter notre réalisation',
        },
    };
}

export default function Layout({ req, children }) {
    return <>{children}</>;
  }