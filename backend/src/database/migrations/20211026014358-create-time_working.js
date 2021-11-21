'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('time_working', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      hour:  {
        type: Sequelize.STRING,
        allowNull: false
      },

      status: {
        type: Sequelize.STRING,
        allowNull: false
      },

      type: {
        type: Sequelize.STRING,
        allowNull: false
      },

      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'employee', 
          key:  'id'
        }
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('time_working')
  }
};
