import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const pokemons = await prisma.pokemon.findMany({
        where: { userId: req?.query.userId, dexName: req?.query.pokedex },
    });

    const dexInfo = await prisma.pokedex.findUnique({
        where: {
            userId_name :
                { userId: req?.query.userId, name: req?.query.pokedex },
        }
    })

    console.log(dexInfo)


    res.json({ pokemons, dexInfo });
}