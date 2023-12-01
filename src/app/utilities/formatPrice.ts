export default function (price: number) {
  return String(price).length > 3
    ? String(price)
        .split('')
        .reduce(
          (acc, cur, index, priceArr) =>
            priceArr.length - 1 - index > 0 &&
            (priceArr.length - 1 - index) % 3 === 0
              ? acc + cur + '.'
              : acc + cur,
          ''
        )
    : price;
}
