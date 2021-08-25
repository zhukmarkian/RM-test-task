import React, {useState} from "react"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/styles";
import SearchLocation from "../filters/SearchLocation";

const StyledTableCell = withStyles((theme) => ({
    head: {
        height: 20,
        padding: 2,
        background: '#343a40!important',
        maxWidth: 1500,
        borderBottom: '1px solid rgb(155 155 155 / 80%)'
    },
    body: {
        background: 'linear-gradient(120deg, #535a5a 0%,#535a5a 100%)',
        fontSize: 14,
        color: 'black',
        width: 1000,
        flexDirection: 'row',
        borderBottom: '1px solid rgb(155 155 155 / 80%)'
    },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            width: 1500

        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        justifyContent: "center",
    },
});
export default function LocationCard({location}) {
    const [searchValue, setSearchValue] = useState("");
    const classes = useStyles();
    const filteredNames = location.filter((arr) =>
        arr.name.toLowerCase().includes(searchValue.toLowerCase())
        || arr.type.toLowerCase().includes(searchValue.toLowerCase())
        || arr.dimension.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>
                            <SearchLocation searchValue={searchValue} setSearchValue={setSearchValue}
                                            value="filteredNames"/>
                        </StyledTableCell>
                        <StyledTableCell align="right">Location Name</StyledTableCell>
                        <StyledTableCell align="right">Type</StyledTableCell>
                        <StyledTableCell align="right">Dimension</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredNames.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.type}</StyledTableCell>
                            <StyledTableCell align="right">{row.dimension}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )


}
