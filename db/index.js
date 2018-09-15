const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, { logging: false });

const Products = conn.define('products', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    notNull: true,
    validate: {
      notEmpty: true,
    },
  },

  rating: Sequelize.INTEGER,
});

const syncAndSeed = () => {
  return conn
    .sync({ force: true })
    .then(() =>
      Promise.all([
        Products.create({ name: 'Shampoo', rating: 4 }),
        Products.create({ name: 'Soap', rating: 5 }),
        Products.create({ name: 'Tootbrush', rating: 1 }),
        Products.create({ name: 'Tootpaste', rating: 2 }),
      ])
    )
    .then(() => {
      console.log('Synced and Seeded');
    });
};

module.exports = {
  models: {
    Products,
  },
  syncAndSeed,
};
