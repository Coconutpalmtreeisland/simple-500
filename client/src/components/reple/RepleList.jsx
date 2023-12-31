import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RepleContent from './RepleContent';

const RepleList = (props) => {
    const [repleList, setRepleList] = useState([]);

    useEffect(() => {
        let body = {
            postId: props.postId,
        }
        axios.post("/api/reple/getReple", body)
            .then((response) => {
                if (response.data.success) {
                    setRepleList([...response.data.repleList])
                }
            }, [props.postId])
    })

    return (
        <div>
            {repleList.map((reple, idx) => (
                <div key={idx} className='reple'>
                    <RepleContent reple={reple} repleId={reple.author} />
                </div>
            ))}
        </div>
    )
}

export default RepleList