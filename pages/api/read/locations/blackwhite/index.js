import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const black = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "black",
                }
            ]
        },
    });


    const white = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "white",
                }
            ]
        },
    });

    

    res.json({ black, white });
}