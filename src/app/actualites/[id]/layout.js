export async function generateMetadata(req, res) {
    const id = req.params.id
    const response = await fetch(`https://testtda.comsea.fr/api/openGraph/${id}`)
    let result = await response.json()
    console.log(result)
    return {
        openGraph: {
            url: `https://testtda.comsea.fr/actualites/${id}`,
            title: 'Titre',
            description: 'description',
        },
    };
}

export default function Layout({ req, children }) {
    return <>{children}</>;
  }