import { useState } from "react"


const GroupedYarns = ({yarns, selectedSize, setSize}) => {
    const [groupedSizes, setGroupData] = useState(GroupedYarns)
    
    function GroupedYarns() {
        var sizes = [];

        var sizeSmallYarns = yarns.filter((yarn) => yarn.selectedSize === 'small');
        var small = {size:'small', yarns: sizeSmallYarns, collapsed: selectedSize === 'small'?false:true}
        yarns.push(small);

        var sizeMediumYarns = yarns.filter((yarn) => yarn.selectedSize === 'medium');
        var small = {size:'medium', yarns: sizeMediumYarns, collapsed: selectedSize === 'medium'?false:true}
        yarns.push(medium);

        var sizeSuperChunkyYarns = yarns.filter((yarn) => yarn.selectedSize === 'superChunky');
        var superChunky = {size:'superChunky', yarns: sizeSuperChunkyYarns, collapsed: selectedSize === 'superChunky'?false:true}
        yarns.push(superChunky);

        var sizeChunkyYarns = yarns.filter((yarn) => yarn.selectedSize === 'chunky');
        var chunky = {size:'chunky', yarns: sizeChunkyYarns, collapsed: selectedSize === 'chunky'?false:true}
        yarns.push(chunky);

    }

    return (

        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Grouped Yarns</h1>
                </div>
            </div>
        </main>
    )

}

export default GroupedYarns