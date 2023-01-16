import milkcotton from "./images/milkcotton.jpg";
import winterking from "./images/winterking.jpg";

const Yarns = ({yarns,selectedSize,handleYarnCardClick,handleSizeSelectionChange}) => {
    

    return (

        <main className="container">
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedSize} onChange={handleSizeSelectionChange}>
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="superChunky">superChunky</option>
                        <option value="chunky">chunky</option>
                    </select>
                </div>
            </div>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-8">
                    <div className="card-collection">
                    {
                        yarns.map((yarn) => (
                            <div key={yarn.id} id="yarn.id" className={(yarn.size === selectedSize?'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleYarnCardClick}>
                                {(yarn.origin === 'local')?<img src={winterking} alt="local yarn" className="card-img-top" />
                                                        :<img src={milkcotton} alt="imported yarn" className="card-img-top" />}
                                <div>
                                    <h5 className="card-title">Name: {yarn.fullName}</h5>
                                    <p className="card-text"><b>Origin</b> {yarn.origin}</p>
                                </div>
                            </div>

                        ))
                    }
                    </div>    
                </div>
            </div>            
        </main>
    )
}

export default Yarns