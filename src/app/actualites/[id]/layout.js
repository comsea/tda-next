export async function generatMetadata(req, res) {
    const id = req.params.id
    const response = await fetch(`http://localhost:3000/api/opengraph/${id}`)

    const imageUrl = await response.text();
    return {
        openGraph: {
            images : imageUrl,
            title: "Test",
        }
    }
}

export default function Layout({ req, children }) {
    return <>{children}</>;
  }