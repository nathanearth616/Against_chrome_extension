const sherifChange = document.querySelectorAll(
	"p, h1, h2, h3, h4, h5, h6, a, u, i, strong, span class, span, div class, cite class, cite role",
)

for (let i = 0; i < sherifChange.length; i++) {
	if (sherifChange[i].innerHTML.includes("Black Sherif")) {
		sherifChange[i].innerHTML = sherifChange[i].innerHTML.replace(
			"Black Sherif",
			"Jon Boy",
		)
	}
}
