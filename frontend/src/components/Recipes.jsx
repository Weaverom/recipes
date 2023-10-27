import {Container, Table} from "reactstrap";
import React from "react";

const Recipes = ({title}) => {
    return(
        <Container>
            <Table>
                <tbody>
                    <tr>
                        <td><a href="/recipe">{title}</a></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Recipes