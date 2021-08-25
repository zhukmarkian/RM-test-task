import React, {useState} from "react"
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/styles";
import Search from "../filters/Search";

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
const EpisodeCard = ({episode}) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState("");
    const filteredNames = episode.filter((entry) =>
        entry.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell> <Search searchValue={searchValue} setSearchValue={setSearchValue}
                                                  value='filteredNames'/></StyledTableCell>
                        <StyledTableCell align="right">Episode Name</StyledTableCell>
                        <StyledTableCell align="right">Realise Date</StyledTableCell>
                        <StyledTableCell align="right">Episode</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredNames.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.air_date}</StyledTableCell>
                            <StyledTableCell align="right">{row.episode}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default EpisodeCard;
