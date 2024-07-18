export default function Price({ oldPrices, newPrices }) {
    let oldstyles = {
        textDecorationLine: "line-through"
    }
    let newstyle = {
        fontWeight : "bold",
    }
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyle}>{newPrices}</span>
        </div>
    )
}
