function DisclaimerPage() {
	return (
		<>
			<div>
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
					{/* TODO: Endre til å fetch fra databasen istedet */}
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
				<p>
					All copyrights and related rights on the content remain with
					their original owners.
				</p>
				<p>
					All copyright on the typographic and layout choices are 2025
					© XY
				</p>
			</div>
		</>
	);
}

export default DisclaimerPage;
