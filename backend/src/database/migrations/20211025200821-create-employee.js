'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('employee', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      socialId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      occupation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'occupation', 
          key:  'id'
        }
      },

      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employee');
  }
};
