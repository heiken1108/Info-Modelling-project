import '../styling/HeaderPages.css'
function DocumentationPage() {
	return (
		<>
			<div className='main-div'>
				<h1>Documentation</h1>
				<h2>Architecture</h2>
				<h3>Frontend</h3>
				<p>
					The website is built using React with Typescript for the
					Frontend. Each page has its own file, placed in a
					pages-folder, and each page has its own styling-document,
					placed in the styling-folder. Every file also share one
					common css-file, in order to better alter the theme. Every
					page also share a common header and footer, for visual
					continuity. The header links back to the cover page, and to
					each of the static About, Documentation and
					Disclaimer-pages.
				</p>
				<h3>Backend</h3>
				<p>
					The backend is built using Node with Javascript. Due to the
					scope being quite small, the API-endpoints are placed
					directly inside the server-file. The backend uses MongoDB
					for persistence, as it is fast, reliable and easy to use for
					our purpose. The API has a few key endpoints. The first is
					the endpoint to get a partiular narrative, by passing an ID.
					The second is the endpoint to get a particular chapter
					within a narrative. Here, the narrativeID plus the index of
					the chapter in the list of chapters is passed. The server
					fetches the relevant chapter. The third is the endpoint to
					get a particular item. Here, the narrativeID, the index of
					the chapter, and the ItemID is passed. While only the ItemID
					is really necessary to get the correct Item, as it is stored
					in its own collection, the API takes in the narrativeID and
					the chapterindex to be able to return pointers to the
					next/previous item and chapters. Pointers for the
					next/previous item and chapters are also returned by the API
					when you fetch a particular chapter. This design choice of
					the API is to make the navigation in the frontend way
					flexible and easy to implement.
				</p>
				<h3>Database</h3>
				<p>
					Within our MongoDB-database, we store two different
					collections: Items and Narratives. In the Items-collection,
					each cuisine is stored with a unique ID, a name (in
					norwegian), a translation (to english), three different
					introductory descriptions, three different average
					difficulty descriptions and three different advanced
					difficutly descriptions. Each item also has an imageUrl,
					which is the source the image was downloaded from, and a
					fileName, which is the local fiilename to fetch the image
					directly from the local directory. In the
					Narrative-collection, each narrative is stored with a unique
					ID, a title, an introductory description, and a list of
					chapters. Each of these chapters contain a title, an
					introduction and a list of Item-Ids, which refer to the
					different items stored in the Items-collection. The setup is
					created like this to be able to easily add new narratives
					and change narratives or single chapters with in a blink.
				</p>

				<h2>The design choices we have done are as follows:</h2>
				<ul>
					<li>Component 1: blablabla</li>
				</ul>
			</div>
		</>
	);
}

export default DocumentationPage;
