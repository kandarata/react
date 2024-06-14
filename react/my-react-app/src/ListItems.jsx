import PropTypes from 'prop-types'

function ListItems(props = {
    category: "Fruits",
    items: [],
}) { 
    const category = props.category;
    const items = props.items;

    const listItems = items.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.weight}</b>
    </li>)

    return (<div>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </div>);
}

ListItems.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape(
        {id: PropTypes.number, name: PropTypes.string, weight: PropTypes.number}
    )),
}


export default ListItems