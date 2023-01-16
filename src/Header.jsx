const Header = ({selectedSize, yarnSizeCount}) => {

    return (

        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Yarn Size</h1>
                    <h3>{selectedSize} has {yarnSizeCount} yarns</h3>
                </div>
            </div>
        </header>
    )

}

export default Header