import "./message.css"
import TimeAgo from 'react-timeago';

export default function Message({message, own}) {
  console.log(message)
  return (
    <div className={own ? "message own" : "message"}>
    <div className="messageTop">
        <img className="messageImg" 
                src={`http://localhost:5000/${message.image} `}


alt=""/>
        <p className="messageText">{message.text} </p>
    </div>
    <div className="messageBottom"><TimeAgo date={message.createdAt} /></div>
    
    </div>
  )
}
