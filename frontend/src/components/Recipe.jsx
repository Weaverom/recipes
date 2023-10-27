import {Container, Table} from "reactstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const API_RECIPES = `http://127.0.0.1:8000/api/recipes/`
const Recipe = () => {
    const [recipes, setRecipes] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(API_RECIPES + `${id}`)
            .then(rec => {
                setRecipes(rec.data)
            })
    }, []);

    return(
        <Container>
            <Table>
                <tbody>
                    <tr>
                        <td>{recipes.title}</td>
                    </tr>
                    <tr>
                        <td>{recipes.text}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Recipe