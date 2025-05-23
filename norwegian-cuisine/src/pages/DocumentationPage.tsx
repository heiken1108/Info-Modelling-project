import '../styling/HeaderPages.css'
function DocumentationPage() {
	return (
		<>
			<div className="main-div-header-pages">
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
					<li>
						Themes: For the themes we have chosen to go for visual
						elements that play into the themes we wanted to create.
						The first theme is the viking-theme. Here we wanted to
						go for a rune-like feel, as if it the interface had been
						created by a viking, during the viking age. In order to
						do so, we added a font that looks like something from
						that age. Also, to give the feel of the page being
						written at that age, we added a lght parchment paper as
						the background, to mimick a old-looking book-page. The
						second is a theme that represents the Norwegian nature.
						In order to do so, a more nature-like font is used, with
						an italic, to give a more wild feel. We opted to use a
						background image of the norwegian nature to make the
						user feel as if he/she is presently in Norway, looking
						out at the fjords. We chose an image from Senja, a place
						in northern Norway, famous for their nature. We chose an
						image with little contrast to make the actual content of
						the page have no problems being seen. For the third
						theme we wanted to go for a traditional norwegian feel,
						using patterns from norwegian heritage, then one you
						would associate with the Marius-genser and bunads.
					</li>
					<li>Component 1: blablabla</li>
				</ul>
			</div>
		</>
	);
}

export default DocumentationPage;
