function Brand(sequelize, DataTypes) {
    const alias = 'Brand';

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
        logo: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    };

    const config = {
        freezeTableName: true,
        timestamps: false
    };

    const brand = sequelize.define(alias, cols, config);

    brand.Associate = function(models){
        brand.hasMany(models.Model, {
            as: 'brand',
            foreignKey: 'Brand_id'
        });
    };

    return brand;
}

export default Brand;