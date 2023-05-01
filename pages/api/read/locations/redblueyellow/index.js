import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const red = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "red",
                }
            ]
        },
    });


    const blue = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "blue",
                }
            ]
        },
    });

    const yellow = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "yellow",
                }
            ]
        },
    });

    

    res.json({ red, blue, yellow });
}