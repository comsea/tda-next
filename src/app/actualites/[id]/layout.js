export async function generateMetadata(req, res) {
    const id = req.params.id
    const response = await fetch(`https://testtda.comsea.fr/api/openGraph/${id}`)
    const data = await response.json()

    const imageUrl = data.imageUrl
    const titleUrl = data.titleUrl
    
    return {
        openGraph: {
            images : imageUrl,
            title: titleUrl
        },
    };
}

export default function Layout({ req, children }) {
    return <>{children}</>;
  }