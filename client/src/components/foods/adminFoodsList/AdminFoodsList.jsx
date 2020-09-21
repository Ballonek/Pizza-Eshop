import React from 'react';
import { Card, CardTitle, CardHeader } from 'reactstrap';
import FoodsListBody from './FoodsListBody'

const AdminFoodsList = ({foods, categories, ingredients}) => {
    return (
        <div className="foods-list">
        {categories.map(category => (            
            <Card className="category-card" key={category}>
                <CardHeader className="category-card-header">
                    <CardTitle>{category}</CardTitle>
                </CardHeader>
                <FoodsListBody foods={foods.foods.filter(food => food.category === category)} category={category} ingredients={ingredients} />
            </Card>
        ))}
        </div>
    );
}

export default AdminFoodsList;
