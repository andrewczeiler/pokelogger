import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const omegaruby = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "omegaruby",
                }
            ]
        },
    });


    const alphasapphire = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "alphasapphire",
                }
            ]
        },
    });

    

    res.json({ omegaruby, alphasapphire });
}