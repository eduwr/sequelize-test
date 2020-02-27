const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        // Encontrar todos usuários que tem email que termina com @gmail.com
        // Desses usuários eu quero buscar todos que moram na Rua Dom Pedro II
        // Desses usuários buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                {association: 'addresses', where: { street: { [Op.iLike]: '%Dom Pedro II'} }}, //endereços
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: { 
                            [Op.iLike]: 'React%'
                        }
                    }
                } //technologias
            ]
        })

        return res.json(users)
    }
}