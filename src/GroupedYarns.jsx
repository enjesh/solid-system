import { useState } from "react"


const GroupedYarns = ({yarns, selectedSize, setSize}) => {
    const [groupedSizes, setGroupData] = useState(groupedYarns)
    
    function groupedYarns() {
        var sizes = [];

        var sizeSmallYarns = yarns.filter((yarn) => yarn.selectedSize === "small");
        var small = {size:"small", yarns: sizeSmallYarns, collapsed: selectedSize === "small"?false:true}
        yarns.push(small);

        var sizeMediumYarns = yarns.filter((yarn) => yarn.selectedSize === "medium");
        var medium = {size:"medium", yarns: sizeMediumYarns, collapsed: selectedSize === "medium"?false:true}
        yarns.push(medium);

        var sizeSuperChunkyYarns = yarns.filter((yarn) => yarn.selectedSize === "superChunky");
        var superChunky = {size:"superChunky", yarns: sizeSuperChunkyYarns, collapsed: selectedSize === "superChunky"?false:true}
        yarns.push(superChunky);

        var sizeChunkyYarns = yarns.filter((yarn) => yarn.selectedSize === "chunky");
        var chunky = {size:"chunky", yarns: sizeChunkyYarns, collapsed: selectedSize === "chunky"?false:true}
        yarns.push(chunky);

    }

    function handleYarnSizeClick(event) {
        var transformedGroupData = groupedSizes.map((groupedData)=> groupedData.size === event.currentTarget.id 
                                                            ?{...groupedData,collapsed:!groupedData.collapsed}
                                                            :groupedData);
    setGroupData(transformedGroupData)
    }

    return (

        <main className="container"> 
            {
                GroupedYarns.map((item)=> {
                    return (
                        <div key={item.groupedSizes} className='card mt-2' style={{cursor:"pointer"}}>
                            <h4 id={item.groupedSizes} className="card-header text-secondary bg-white" onClick={handleYarnSizeClick}>
                                Yarn Size: {item.groupedSizes}
                            </h4>
                            <div id = {"collapse_" + item.groupedSizes}
                                      className={item.collapsed === true?"collapsed":""}>
                                <hr />
                                {
                                    item.sizes.map(size => {
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {yarns.fullname}</span>
                                                </h5>
                                                <p>Origin: {yarns.origin}</p>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    )
                })
            }
        
            h
        </main>
    )

}

export default GroupedYarns