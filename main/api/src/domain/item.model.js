class Item {
  constructor({
    id,
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
    category,
  }) {
    this.id = id;
    this.title = title;
    this.price = price; // { currency, amount, decimals }
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity || 0;
    this.description = description || '';
    this.category = category || '';
  }
}

export default Item;
