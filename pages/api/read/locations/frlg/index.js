import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const firered = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "firered",
                }
            ]
        },
    });


    const leafgreen = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "leafgreen",
                }
            ]
        },
    });

    

    res.json({ firered, leafgreen });
}