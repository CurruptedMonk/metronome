const cutChildren = (props) => {
    const { children } = { ...props };
    delete props.children;

    return [children, props];
};

export default cutChildren;