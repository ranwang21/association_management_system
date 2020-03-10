import React, { Component } from 'react'
import { TableHead, Table, TableBody, TableRow, TableCell, TableFooter, TableContainer } from '@material-ui/core'

const userList = [
    { idUser: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { idUser: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { idUser: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { idUser: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { idUser: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' }
]

const acteurs = [
    { idUser: '1', roleLable: 'admin', firstName: 'admin', lastName: 'ADMINISTRATEUR', isValid: true },

    { idUser: '2', roleLable: 'only_parent', firstName: 'parent_1', lastName: 'P_NAME_1', isValid: true },
    { idUser: '3', roleLable: 'only_parent', firstName: 'parent_2', lastName: 'P_NAME_2', isValid: false },
    { idUser: '4', roleLable: 'only_parent', firstName: 'parent_3', lastName: 'P_NAME_3', isValid: true },
    { idUser: '5', roleLable: 'only_parent', firstName: 'parent_4', lastName: 'P_NAME_4', isValid: false },

    { idUser: '6', roleLable: 'only_collaborateur', firstName: 'colaborateur_1', lastName: 'C_NAME_1', isValid: false },
    { idUser: '7', roleLable: 'only_collaborateur', firstName: 'colaborateur_2', lastName: 'C_NAME_1', isValid: true },
    { idUser: '8', roleLable: 'only_collaborateur', firstName: 'colaborateur_3', lastName: 'C_NAME_1', isValid: false },
    { idUser: '9', roleLable: 'only_collaborateur', firstName: 'colaborateur_4', lastName: 'C_NAME_1', isValid: true },

    { idUser: '10', roleLable: 'both', firstName: 'both_1', lastName: 'B_NAME_1', isValid: true },
    { idUser: '11', roleLable: 'both', firstName: 'both_2', lastName: 'B_NAME_2', isValid: false },
    { idUser: '12', roleLable: 'both', firstName: 'both_3', lastName: 'B_NAME_3', isValid: true },
    { idUser: '13', roleLable: 'both', firstName: 'both_4', lastName: 'B_NAME_4', isValid: false },

    { idUser: '14', roleLable: 'child', firstName: 'children_1', lastName: 'C_NAME_1', isValid: true },
    { idUser: '15', roleLable: 'child', firstName: 'children_2', lastName: 'C_NAME_2', isValid: true },
    { idUser: '16', roleLable: 'child', firstName: 'children_3', lastName: 'C_NAME_3', isValid: true },
    { idUser: '17', roleLable: 'child', firstName: 'children_4', lastName: 'C_NAME_4', isValid: true },
    { idUser: '18', roleLable: 'child', firstName: 'children_5', lastName: 'C_NAME_5', isValid: true },
    { idUser: '19', roleLable: 'child', firstName: 'children_6', lastName: 'C_NAME_6', isValid: true },
    { idUser: '20', roleLable: 'child', firstName: 'children_7', lastName: 'C_NAME_7', isValid: true },
    { idUser: '21', roleLable: 'child', firstName: 'children_8', lastName: 'C_NAME_8', isValid: true },
    { idUser: '22', roleLable: 'child', firstName: 'children_9', lastName: 'C_NAME_9', isValid: true },
    { idUser: '23', roleLable: 'child', firstName: 'children_10', lastName: 'C_NAME_10', isValid: true }
]

class TableListContainerTest extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <>
                <TableContainer>
                    <Table className='tabletrg'>
                        <TableHead>
                            <TableRow>
                                <TableCell>CELLULE 1</TableCell>
                                <TableCell>CELLULE 2</TableCell>
                                <TableCell>CELLULE 3</TableCell>
                                <TableCell>CELLULE 4</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow hover>
                                <TableCell>val_1</TableCell>
                                <TableCell>val_2</TableCell>
                                <TableCell>val_3</TableCell>
                                <TableCell>val_4</TableCell>
                            </TableRow>
                            <TableRow hover>
                                <TableCell>val_1</TableCell>
                                <TableCell>val_2</TableCell>
                                <TableCell>val_3</TableCell>
                                <TableCell>val_4</TableCell>
                            </TableRow>
                            <TableRow hover>
                                <TableCell>val_1</TableCell>
                                <TableCell>val_2</TableCell>
                                <TableCell>val_3</TableCell>
                                <TableCell>val_4</TableCell>
                            </TableRow>
                            <TableRow hover>
                                <TableCell>val_1</TableCell>
                                <TableCell>val_2</TableCell>
                                <TableCell>val_3</TableCell>
                                <TableCell>val_4</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter />
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default TableListContainerTest
