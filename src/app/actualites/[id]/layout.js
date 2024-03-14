export async function generateMetadata(req, res) {
    //try {
        const id = req.params.id;
        const response = await fetch(`https://testtda.comsea.fr/api/openGraph/${id}`);
        console.log(response)
        const responseBody = await response.text();
        const data = JSON.parse(responseBody)
        return {
            openGraph: {
                images: 'image',
                url: `https://testtda.comsea.fr/actualites/${id}`,
                title: 'data', // Consider making this dynamic
                description: 'desc', // Consider making this dynamic
            },
        };
    /*} catch (error) {
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
    }*/
}


export default function Layout({ req, children }) {
    return <>{children}</>;
  }