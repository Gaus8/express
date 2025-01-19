
const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        invalid_type_error: "Debe ser un string",
        required_error: "El titulo es requerido"
    }),
    year: z.number().int().min(1900).max(2024),

    title: z.string({
        invalid_type_error: "Debe ser un string",
        required_error: "El nombre del director es requerido"

    }),
    duration: z.number().positive(),
    poster: z.string().url({
        invalid_type_error: "La url no es correcta!"
    }),
    genre: z.array(
        z.enum([
            'Drama', 'Crime', 'Action',
            'Adventure', 'Sci-Fi', 'Crime',
            'Romance', 'Animation', 'Biography',
            'Fantasy','Horror'
        ])
    ),

    rate: z.number().positive().default(5)

});

function validateMovie(object) {
    return movieSchema.safeParse(object);
}

function updateMoviePartial(object){
    return movieSchema.partial().safeParse(object);
}

module.exports = {
    validateMovie,
    updateMoviePartial
}