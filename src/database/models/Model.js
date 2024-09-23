function Model(sequelize, DataTypes){
    const alias = 'Model';

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        Brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        freezeTableName: true,
        timestamps: false
    };

    const model = sequelize.define(alias, cols, config);

    model.associate = function(models){
        model.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'Brand_id'
        });
    };

    return model;
}

export default Model;