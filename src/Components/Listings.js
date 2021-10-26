import React, { useState } from 'react'
import { smallBiz } from '../Data/smallBiz'
import Details from './Details'


export default function Listings() {
    const [list, setList] = useState(smallBiz)

    return (
        <div>
            {list.map((biz,index) => (
                <Details biz={biz}/>
            ))}
        </div>
    )
}
