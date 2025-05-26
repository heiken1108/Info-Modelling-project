import '../styling/HeaderPages.css'
function AboutPage() {
	return (
		<>
			<div className="main-div-header-pages">
				<h1>About group "Grandiosa"</h1>
				<p>
					This group consists of two members, Elena Willmann and Håkon
					Hoelsæter. They are both Computer Science-students from
					Norway, currently on exchange in Bologna. In Norway, they
					study at the Norwegian University of Science and Technology
					- NTNU. They are both in their fourth year of study. Håkon
					is 22 years old and is from the capital, Oslo, while Elena
					is 23 years old and is from Asker, a city just outside of
					Oslo. They decided to work together on this project because 
					they both liked the idea of presenting Norwegian cuisine. 
					Even though they have studied together for almost four years, 
					this will be the first project they work on together.
				</p>
				<p>
					When working on the project, the main idea was to work as much as possible together. 
					This was to ensure both team members were present when making choices about the project.
					However, due to different schedules, this was not always possible.
					They also wanted to ensure that both team members had the opportunity to work 
					on the parts of the project they were most interested in, and this could be done separately.
					So for the project, the separation of work is mostly divided at
					the border between frontend and backend. However, there is 
					overlap. The contributions are as follows:
				</p>
				<ul>
					<li>
						Elena Willmann: <br />
						<ul>
							<li>Frontend</li>
							<li>General styling of the project</li>
							<li>Pictures</li>
							<li>Meta-data</li>
							<li>Show more / show less & difficulty features</li>
							<li>Narratives</li>
							<li>Information about the chapters</li>
						</ul>
					</li>
					<li>
						Håkon Hoelsæter: <br />
						<ul>
							<li>Backend</li>
							<li>Database management</li>
							<li>Project structure</li>
							<li>Frontend</li>
							<li>Themes</li>
							<li>Navigation</li>
							<li>QR codes</li>
							<li>Map</li>
							<li>Meta-data</li>
							<li>Information about the dishes</li>
						</ul>
					</li>
				</ul>
				<p>
					Even though they have divided the work, they both have had to work 
					on eachothers part and code, which ensures that both members have a 
					good understanding of the entire project. 
				</p>
				<p>
					Both members have enjoyed working on this project, and they hope that 
					anyone who uses the project will enjoy it as well.
				</p>
			</div>
		</>
	);
}

export default AboutPage;
