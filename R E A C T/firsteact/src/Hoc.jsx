const Hoc = WrapperComponent => {
// js code
    return props => {
// js code

        return (
            <WrapperComponent
                name={props.name}
                course="React JS"
                instituteLoc="Coimbatore"
                instituteName="Qspiders Coimbatore"
            />
        );
    };
};

export default Hoc;