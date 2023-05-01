import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const result = await prisma.pokedex.delete({
        where: {
            userId_name :
                { userId: req?.body.userId, name: req?.body.pokedex },
        }
    })

    console.log(result)


    res.json({ result });
}