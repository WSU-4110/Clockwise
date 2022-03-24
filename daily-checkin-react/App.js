import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div className='button'>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


//Main App function
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Welcome to Clockwise",
      isCompleted: false
    },
    {
      text: "Use the textbox to enter a task",
      isCompleted: false
    },
  ]);

  //Delete Task
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //Completed Task
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //Add Task
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
//Quotes Page Below

class Quote extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        quote: '',
        author: ''
     }
  }

  componentDidMount() {
     this.getQuote()
  }

  getQuote() {
     let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

     axios.get(url)
        .then(res => {
           let data = res.data.quotes
           let quoteNum = Math.floor(Math.random() * data.length)
           let randomQuote = data[quoteNum]
           // let randomQuote = data[Math.floor(Math.random() * data.length)]

           this.setState({
              quote: randomQuote['quote'],
              author: randomQuote['author']
           })
        })
  }

  getNewQuote = () => {
     this.getQuote()
  }

  render() {
     const { quote, author } = this.state
     return (
        <div id='wrapper'>
           <h1 className='title'>Random Quote App</h1>

           <div id='quote-box'>
              <QuoteBox quote={quote} author={author} />

              <div id='buttons'>
                 <TwitterShare quote={quote} author={author} />
                 <Button title='New Quote' onClick={this.getNewQuote} />
              </div>
           </div>
        </div>
     )
  }
}

// Quote Box component
const QuoteBox = ({ quote, author }) => { //destructuring
  return (
     <React.Fragment>
        <div id='text'><p>{quote}</p></div>
        <div id='author'><h5>{author}</h5></div>
     </React.Fragment>
  )
}

//Button component
const Button = ({ onClick, title }) => {
  return (
     <button className='button' id='new-quote' onClick={onClick}>{title}</button>
  )
}

// Social Share component
const TwitterShare = ({ quote, author }) => {
  return (
     <React.Fragment>
        <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="_blank" title="Post this quote on twitter!" id='tweet-quote'>
           <i className="fab fa-twitter twitter-icon" />
        </a>
     </React.Fragment>
  )
}

ReactDOM.render(<Quote />, document.getElementById('root'))



export default App
export { Quote };