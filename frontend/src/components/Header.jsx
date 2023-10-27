import React, {useEffect, useState} from "react";
import axios from "axios";
import {Container, Table} from "reactstrap";
import './Header.css';
import {Link} from "react-router-dom";

const API_RECIPES = `http://127.0.0.1:8000/api/recipes`
const API_CATEGORIES = "http://127.0.0.1:8000/api/category"



const Header = () => {
    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState(0)


    useEffect(() => {
        axios.get(API_RECIPES + `?${categoryId ? `category=${categoryId}` : ''}`)
            .then(rec => {
                setRecipes(rec.data)
            })
        axios.get(API_CATEGORIES)
            .then(cat => {
                setCategories(cat.data)
            })
    }, [categoryId]);

    return(
        <div className="header">
            <div className='categories'>
                <div
                    onClick={() => setCategoryId(0)}
                    className={categoryId === 0 ? 'active' : ''}>
                    Все
                </div>
                {categories.map(el =>(
                    <div
                        onClick={() => setCategoryId(el.title)}
                        className={categoryId === el.title ? 'active' : ''}
                        key={el.id}>
                        {el.title}
                    </div>
                ))}
            </div>
            <Container>
                <Table>
                    <tbody>
                        {recipes.map(el => (
                            <tr key={el.id}>
                                <td><Link to={`/recipes/${el.id}`}>{el.title}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Header;