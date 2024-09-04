GET /movies
GET /movies/:<untitulo>
POST /movies body: {
		"title": "<un titulo>",
		"year": <un año>,
		"director": "<un director>",
		"duration": "<hora>h <minutos>min",
		"genre": [
			"<un genero>",
			"<un genero>",
			"<un genero>"
		],
		"rate": <un numero flotante>,
		"poster": "<una url>"
	}
