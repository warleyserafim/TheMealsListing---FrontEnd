import React, { useEffect } from "react";
import api from "../services/api";
import { Avatar, Card, Input } from 'antd';
import ReadMore from "../components/readMore";


const { Meta } = Card;

export default function Home() {
    const [meals, setMeals] = React.useState([]);
    const [error, setError] = React.useState(null);

  

    async function getMeals() {
        try {
            const response = await api.get("/");           
            setMeals(response.data);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        getMeals();
    }, []);

    function filterBySearch(e) {
        const search = e.target.value;

        if (search === "") {
            getMeals();
        }

        var updatedList = meals;

        updatedList = updatedList.filter(function (item) {
            return item.strMeal.toLowerCase().search(search.toLowerCase()) !== -1;
        });
        setMeals(updatedList);
        console.log(updatedList);

    }
    
    if (error) {
        return <div className="container">Erro ao carregar os dados</div>;
    }
   

    return (

        <div className="container">
            <h1>Listing Meals</h1>
            <Input placeholder="Procure aqui o Seu Prato" onChange={filterBySearch} className="input-search" />
            {meals.length === 0 && (
                <h1 >
                    Nenhum prato encontrado
                </h1>
            )}            
            {meals.map((meal) => (

                <Card key={meal.idMeal} hoverable className="card"
                    cover={
                        <img
                            alt="example"
                            src={meal.strMealThumb}
                        />
                    }
                >
                    <Meta
                        avatar={<Avatar src={meal.strMealThumb} />}
                        title={meal.strMeal}
                        description={meal.strArea + " / " + meal.strCategory}

                    />

                    <div className="card-content">
                        <h3>Instruções</h3>

                    </div>
                    <ReadMore text={meal.strInstructions} />
                </Card>
            ))}
        </div>



    );
}


