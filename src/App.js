import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () =>{
  return (
    <div className= "ui container comments">
        <ApprovalCard>
        <CommentDetail
          author="sam"
          timeAgo= "today at 1"
          blogPost="I like it!"
          avatar={faker.image.avatar()}
          />
          </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
          author="houston"
          timeAgo= "today at 2"
          blogPost="I like it!"
          avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
          author="real"
          timeAgo= "today at 3"
          blogPost="I like it!"
          avatar={faker.image.avatar()}
          />
          </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
          author="not"
          timeAgo= "today at 4"
          blogPost="I like it!"
          avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
          author="hommer"
          timeAgo= "today at 5"
          blogPost="I like it!"
          avatar={faker.image.avatar()}
          />
          </ApprovalCard>


  </div>

  )
}
ReactDOM.render(<App />, document.querySelector('#root'))
export default App
