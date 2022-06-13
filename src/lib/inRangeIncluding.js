const inRangeIncluding = (number, range) => {
    return number >= range.from && number <= range.to;
}

export default inRangeIncluding;