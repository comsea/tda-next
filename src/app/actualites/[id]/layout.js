export async function generateMetadata(req, res) {
    try {
        const id = req.params.id;
        const response = await fetch(`https://testtda.comsea.fr/api/openGraph/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch image URL: ${response.statusText}`);
        }
        const data = await response.json();
        const { imageUrl, titleUrl, descUrl } = data
        return {
            openGraph: {
                images: imageUrl,
                url: `https://testtda.comsea.fr/actualites/${id}`,
                title: titleUrl, // Consider making this dynamic
                description: descUrl, // Consider making this dynamic
            },
        };
    } catch (error) {
        console.error('Error generating Open Graph metadata:', error);
        // Handle the error appropriately, e.g., return a default metadata object
        return {
            openGraph: {
                images: '',
                url: '',
                title: 'Default Title',
                description: 'Default Description',
            },
        };
    }
}


export default function Layout({ req, children }) {
    return <>{children}</>;
  }