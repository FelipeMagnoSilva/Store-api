import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    "postgres://cmldfqzv:KxeOrYLBJ8koXUe8xrtdQ629VSdAHHAp@fanny.db.elephantsql.com/cmldfqzv",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize