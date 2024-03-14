export async function generateMetadata(req, res) {
    const id = req.params.id
    const response = await fetch(`https://testtda.comsea.fr/api/openGraph/${id}`)

    const imageUrl = await response.text();
    return {
        openGraph: {
            images : imageUrl,
            title: "Actus"
        },
    };
}

export default function Layout({ req, children }) {
    return <>{children}</>;
  }