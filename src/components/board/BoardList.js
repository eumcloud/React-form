import React, {useState} from "react";

const BoardItem = React.memo(function BoardItem({post}) {
    return (
        <tr>
            <td>
                user
            </td>
            <td>
                title
            </td>
            <td>
                {post.text}
            </td>
        </tr>
    );
});

const BoardList = React.memo(function boardList({posts}) {
    console.log(posts)
    return (
        <table border="1">
            <tbody>
                <tr>
                    <td>
                        작성자
                    </td>
                    <td>
                        제목
                    </td>
                    <td>
                        내용
                    </td>
            </tr>
                {posts.map(post => ( post.id <= 5 &&
                    <BoardItem key={post.id} post={post}/>
                ))}
            </tbody>
        </table>
    );
});

function Boards({posts, onCreate}) {
        const [text, setText] = useState('');
        const onChange = (e) => setText(e.target.value);
        const onSubmit = e => {
        e.preventDefault(); // submit 이벤트 발생시 refresh 방지
        onCreate(text);
        setText(''); // initialize input
    };
    return(
        <div>
            <BoardList posts={posts} />
            <form onSubmit={onSubmit}>
                <input 
                value={text}
                placeholder="board"
                onChange={onChange}
                required="required"
                />
                <button type="submit">글추가쓰</button>
            </form>
        </div>
    );
}

export default Boards;