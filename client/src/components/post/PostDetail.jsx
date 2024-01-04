import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const PostDetail = (props) => {
    let params = useParams();
    let navigate = useNavigate();

    const DeleteHandler = () => {
        if (window.confirm('정말로 삭제하기겠습니까?')) {
            let body = {
                postNum: params.postNum,
            }
            axios
                .post('/api/post/delete', body)
                .then((resonpse) => {
                    console.log(resonpse);
                    if (resonpse.data.success) {
                        alert('게시글이 삭제되었습니다.')
                        navigate('/list')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('게시글 삭제가 실패했습니다.')
                })
        }
    }
    console.log(props);

    return (
        <div className='detail__wrap'>
            <div className='detail__title'>
                <h3>{props.postInfo.title}</h3>
                <span className='auth'>{props.postInfo.author.displayName}</span>
            </div>
            <div className='detail__content'>
                {props.postInfo.image ?
                    props.postInfo.image.map((img, index) =>
                        <img key={index} src={img} alt={`img-${index}`} />)
                    : null}
                {props.postInfo.content}
            </div>
            <div className='detail__btn'>
                <Link to={`/modify/${props.postInfo.postNum}`}>
                    수정
                </Link>
                <button onClick={() => DeleteHandler()}>삭제</button>
                <Link to='/list'>목록</Link>
            </div>
        </div>
    )
}

export default PostDetail