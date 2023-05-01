import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const ultrasun = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "ultrasun",
                }
            ]
        },
    });


    const ultramoon = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "ultramoon",
                }
            ]
        },
    });

    

    res.json({ ultrasun, ultramoon });
}