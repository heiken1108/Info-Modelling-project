import '../styling/HeaderPages.css';
function DisclaimerPage() {
	return (
		<>
			<div className="main-div-header-pages">
				<h1>Disclaimer</h1>
				<p>
					The purpose of this web site is to explore various types of
					typographic and layout style for musem pages, as an
					end-of-course project for the "Information Modeling and Web
					technologies" course of the Master Degree in Digital
					Humanities and Digital Knowledge of the University of
					Bologna, under prof. Fabio Vitali.
				</p>
				<p>
					The content of this web site is a collection of texts and
					images providing context to different norwegian dishes. The
					dishes are a collection of 15 of the most known foods eaten
					in Norway and with a special connection to norwegian
					culture. The texts describing each food are generated with
					ChatGPT and then vetted by the members of the group. The
					images are downloaded from various sources online and placed
					locally to ensure the page don't have problems fetching the
					images. Their publication here is not intended to be an
					alternative or replace their original locations. Each food
					has one image, and the sources for the images to the
					corresponding foods are as follows:
				</p>
				<ul>
					{/* TODO: Endre til å fetch fra databasen istedet  */}
					<li>
						Brunost (Brown cheese):
						<a href="https://lokalhistoriewiki.no/Brunost">
							https://lokalhistoriewiki.no/Brunost
						</a>
					</li>
					<li>
						Røkelaks (Smoked salmon):
						<a href="https://www.salma.no/tema/rokelaks">
							https://www.salma.no/tema/rokelaks
						</a>
					</li>
					<li>
						Sursild (Pickled herring):
						<a href="https://norsktradisjonsmat.no/oppskrift/sursild">
							https://norsktradisjonsmat.no/oppskrift/sursild
						</a>
					</li>
					<li>
						Tørrfisk (Dried fish):
						<a href="https://www.nationen.no/alle-trenger-torrfisk/o/5-148-98561">
							https://www.nationen.no/alle-trenger-torrfisk/o/5-148-98561
						</a>
					</li>
					<li>
						Rakfisk (Fermented Trout):
						<a href="https://www.celebritycruises.com/blog/content/uploads/2020/06/norwegian-food-rakfisk.jpg">
							https://www.celebritycruises.com/blog/content/uploads/2020/06/norwegian-food-rakfisk.jpg
						</a>
					</li>
					<li>
						Fårikål (Mutton in cabbage):
						<a href="https://www.gilde.no/oppskrifter/klassisk-farikal-med-en-vri">
							https://www.gilde.no/oppskrifter/klassisk-farikal-med-en-vri
						</a>
					</li>
					<li>
						Pinnekjøtt (Lamb ribs):
						<a href="https://www.gilde.no/oppskrifter/pinnekjott-med-rotmos-og-saus">
							https://www.gilde.no/oppskrifter/pinnekjott-med-rotmos-og-saus
						</a>
					</li>
					<li>
						Smalahove (Sheep head):
						<a href="https://jacobs.no/Kjott/Oppskrifter-med-kjott/Lam1/Smalahove/">
							https://jacobs.no/Kjott/Oppskrifter-med-kjott/Lam1/Smalahove/
						</a>
					</li>
					<li>
						Finnbiff (Reindeer stew):
						<a href="https://www.visitnorway.no/aktiviteter-og-attraksjoner/mat-og-drikke/den-norske-kokeboka/finnbiff/">
							https://www.visitnorway.no/aktiviteter-og-attraksjoner/mat-og-drikke/den-norske-kokeboka/finnbiff/
						</a>
					</li>
					<li>
						Vafler (Norwegian waffles):
						<a href="https://www.melk.no/Oppskrifter/Vafler/Soete-vafler-med-syrnet-melk">
							https://www.melk.no/Oppskrifter/Vafler/Soete-vafler-med-syrnet-melk
						</a>
					</li>
					<li>
						Grandiosa (Grandiosa):
						<a href="https://www.godt.no/aktuelt/i/lA017y/grandiosa-fyller-40-aar-selger-25-millioner-i-aaret">
							https://www.godt.no/aktuelt/i/lA017y/grandiosa-fyller-40-aar-selger-25-millioner-i-aaret
						</a>
					</li>
					<li>
						Ribbe (Ribs):
						<a href="https://meny.no/oppskrifter/Svin/Ribbe/Klassisk-ribbe-med-spro-svor/">
							https://meny.no/oppskrifter/Svin/Ribbe/Klassisk-ribbe-med-spro-svor/
						</a>
					</li>
					<li>
						Gløgg (Scandinavian mulled wine):
						<a href="https://happycatering.no/produkt/varm-glogg/">
							https://happycatering.no/produkt/varm-glogg/
						</a>
					</li>
					<li>
						Taco (Norwegian taco):
						<a href="https://joker.no/oppskrifter/klassisk-taco">
							https://joker.no/oppskrifter/klassisk-taco
						</a>
					</li>
					<li>
						Wienerpølse (Wiener hot dog):
						<a href="https://pixabay.com/de/photos/w%C3%BCrstchen-wienerle-wiener-w%C3%BCrstchen-1508568/">
							https://pixabay.com/de/photos/w%C3%BCrstchen-wienerle-wiener-w%C3%BCrstchen-1508568/
						</a>
					</li>
				</ul>
				<p>Fonts are fetched from:</p>
				<ul>
					<li>
						Viking-theme font:
						<a href="https://www.dafont.com/viking.font">
							https://www.dafont.com/viking.font
						</a>
					</li>
					<li>
						Nature-theme font:
						<a href="https://fonts.google.com/specimen/Playfair+Display">
							https://fonts.google.com/specimen/Playfair+Display
						</a>
					</li>
					<li>
						Nordic-theme font:
						<a href="https://www.fontspace.com/stitch-warrior-demo-font-f20659">
							https://www.fontspace.com/stitch-warrior-demo-font-f20659
						</a>
					</li>
					<li>
						Scandi-minimal-theme font:
						<a href="https://www.dafontfree.io/download/avenir/#google_vignette">
							https://www.dafontfree.io/download/avenir/#google_vignette
						</a>
					</li>
				</ul>
				<p>Backgrounds are fetched from:</p>
				<ul>
					<li>
						Viking-theme background:
						<a href="https://www.wallpapergap.com/parchment-wallpapers/">
							https://www.wallpapergap.com/parchment-wallpapers/
						</a>
					</li>
					<li>
						Nature-theme background:
						<a href="https://unsplash.com/photos/a-large-body-of-water-surrounded-by-mountains-0NmuPmFq4UE">
							https://unsplash.com/photos/a-large-body-of-water-surrounded-by-mountains-0NmuPmFq4UE
						</a>
					</li>
					<li>
						Nordic-theme background:
						<a href="https://www.vecteezy.com/vector-art/53388683-knitting-geometric-pattern-christmas-tree-knitting-background-for-wallpaper-card-site-fabric-wrapping-paper?autodl_token=a4d4507b12091ab3991ac3887f4330e9f97a9a6589d8249522a74fba164de5a55ff643a6af0ff02205d0ba1556b5161b5477ce9f20c18ecf9a7cdd3b116674ff">
							https://www.vecteezy.com/vector-art/53388683-knitting-geometric-pattern-christmas-tree-knitting-background-for-wallpaper-card-site-fabric-wrapping-paper?autodl_token=a4d4507b12091ab3991ac3887f4330e9f97a9a6589d8249522a74fba164de5a55ff643a6af0ff02205d0ba1556b5161b5477ce9f20c18ecf9a7cdd3b116674ff
						</a>
					</li>
					<li>
						Scandi-minimal-theme background:
						<a href="https://www.freepik.com/free-photo/abstract-minimal-plant-leaning-wall-front-view_12230474.htm#fromView=search&page=1&position=6&uuid=9a9693e6-a7e6-4fb6-a065-ffcfc7cdea09&query=scandinavian+minimalism">
							https://www.freepik.com/free-photo/abstract-minimal-plant-leaning-wall-front-view_12230474.htm#fromView=search&page=1&position=6&uuid=9a9693e6-a7e6-4fb6-a065-ffcfc7cdea09&query=scandinavian+minimalism
						</a>
						and extended articifially with{' '}
						<a href="https://www.pixelcut.ai/ai-image-editor?tool=uncrop">
							https://www.pixelcut.ai/ai-image-editor?tool=uncrop
						</a>
					</li>
				</ul>
				<p>
					All copyrights and related rights on the content remain with
					their original owners.
				</p>
				<p>
					All copyright on the typographic and layout choices are 2025
					© Hoelsæter, Willmann
				</p>
			</div>
		</>
	);
}

export default DisclaimerPage;
