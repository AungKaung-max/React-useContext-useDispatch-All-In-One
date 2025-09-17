// import React from 'react'
// import FancyText from './FancyText'
// import InspirationGenerator from './InspirationGenerator'
// import { Copyright } from './Copyright'


// const App = () => {
//   const year = new Date().getFullYear();
//   return (
//     <>
//     <FancyText text="Get Inspired App" title/>

//       <InspirationGenerator>
//         <Copyright year={year}/>
//         </InspirationGenerator> 
//       {/* <button onClick={alert('You clicked me!')}>Run immediate</button> */}
//       <button onClick={() => alert('You clicked me!')}>Click run</button>

//     </>
//   )
// }


// export default App;



// import React, { useState } from 'react'

// function Button({children,onClick}) {

// return (
//   <button onClick={(e) => {
//     e.stopPropagation();
//     onClick();
//   }}>{children}</button>
// )
// }

// function PlayButton({movieName}) {
//   return(
//     <Button onClick={() =>  alert(`Playing ${movieName}!`)}>{movieName}</Button>
//   )
// }

// function UploadButton() {
//   return(
//     <Button onClick={() => alert("Upload Button")}>
//       Upload
//     </Button>
//   )
// }

//   function ColorSwitch({onChangeColor,onCount}) {
//     function handleClick(e) {
//         e.stopPropagation();
//       onChangeColor();
//       onCount();
//     }

//     return(
//       <>

//       <button onClick={handleClick}>
//         Change Color
//       </button>
//       </>
//     )
//   }

// function App() {
//   const [count,setCount] = useState(0);
//   function handleClick() {

//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//       <>
//       <h3>Click on the page {count}</h3>
//       <ColorSwitch onChangeColor={handleClick} onCount={()=> setCount(count + 1)}/>
//       </>

//   )
// }

// export default App;



// import React, { useState } from 'react';sculptureList
// import {sculptureList} from './data';

// function App() {
//   const [index,SetIndex] = useState(0);
//   const [showMore,setShowMore] = useState(false);
//   const sculpture = sculptureList[index];

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }
//   return (
//     <>
//     <button onClick={() => SetIndex((index + 1)% sculptureList.length) }>
//       Next
//     </button>
//     <h2>
//         <i>{sculpture.name}</i>
//         by {sculpture.artist}
//     </h2>
//     <h3>
//       ({index + 1} of {sculptureList.length})
//     </h3>
//     <button onClick={handleMoreClick}>
//       {showMore ? 'Hide Details' : 'Show Details'}
//     </button>

//     <p>
//       {showMore && sculpture.description}
//     </p>
//    <img 
//       src={sculpture.url} 
//       alt={sculpture.alt}
//     />
//     </>
//   )
// }

// export default App


//   export default function Form() {
//     let [firstName,setFirstName] = useState('');
//     let [lastName,setLastName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value)
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value)
//   }

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }



// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//    const [message, setMessage] = useState('');
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }


// import { getFinalState } from './processQueue.js';

// function increment(n) {
//   return n + 1;
// }
// increment.toString = () => 'n => n+1';

// export default function App() {
//   return (
//     <>
//       <TestCase
//         baseState={0}
//         queue={[1, 1, 1]}
//         expected={1}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[
//           increment,
//           increment,
//           increment
//         ]}
//         expected={3}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[
//           5,
//           increment,
//         ]}
//         expected={6}
//       />
//       <hr />
//       <TestCase
//         baseState={0}
//         queue={[
//           5,
//           increment,
//           42,
//         ]}
//         expected={42}
//       />
//     </>
//   );
// }

// function TestCase({
//   baseState,
//   queue,
//   expected
// }) {
//   const actual = getFinalState(baseState, queue);
//   return (
//     <>
//       <p>Base state: <b>{baseState}</b></p>
//       <p>Queue: <b>[{queue.join(', ')}]</b></p>
//       <p>Expected result: <b>{expected}</b></p>
//       <p style={{
//         color: actual === expected ?
//           'green' :
//           'red'
//       }}>
//         Your result: <b>{actual}</b>
//         {' '}
//         ({actual === expected ?
//           'correct' :
//           'wrong'
//         })
//       </p>
//     </>
//   );
// }


// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }


// import React, { useState } from 'react'
// import Background from './Background'
// import Box from './Box'

// const initialPosition = {
//   x: 0,
//   y: 0
// };

// function App() {
//   const [shape,setShape] = useState({
//     color:'orange',
//     position: initialPosition
//   })

//   function handleMove(dx, dy) {
//     setShape({
//       ...shape,
//       position:{
//         x: shape.position.x + dx,
//         y: shape.position.y + dy
//       }
//     })
//     console.log("handlemove", shape)
//   }

//   return (
//     <>
//         <select onChange={(e) => setShape({...shape,color: e.target.value })}>
//           <option value="orange">
//             orange
//           </option>
//            <option value="lightpink">
//             lightpink
//           </option>
//            <option value="aliceblue">
//             aliceblue
//           </option>
//         </select>

//         <Background position={initialPosition}/>
//         <Box color={shape.color} position={shape.position} onMove={handleMove}>Drage Me!</Box>
//     </>
//   )
// }

// export default App



// import React, { useState } from 'react'

// let nextId = 0;

// function App() {
//   const [name, setName] = useState('');
//   const [artist, setArtist] = useState([]);

//   function handleAdd() {
//     setArtist([

//       {
//         id: nextId++,
//         name
//       },
//       ...artist,
//     ])
//   }
//   return (
//     <>
//       <h3>Inspiring Sculupure</h3>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleAdd}>Add</button>
//       <ul>
//         {artist.map(data => (
//           <li key={data.id}>{data.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App



// import { useState } from 'react';

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];


// import React from 'react'

// function App() {
//   const [artists, setArtists] = useState(
//     initialArtists
//   );
//   return (
//     <>
//     <h1>Inspiring sculptors:</h1>
//     <ul>
//       {
//         artists.map(artist => ((
//           <li key={artist.id}>
//             {artist.name} <button onClick={() => {
//               setArtists(
//                 artists.filter(data => data.id != artist.id)
//               )
//             }}>Delete</button>
//           </li>
//         )))
//       }
//     </ul>
//     </>
//   )
// }

// export default App


// import { useState } from 'react';

// let initialShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// import React from 'react'

// function App() {
//   const [shapes, setShapes] = useState(
//     initialShapes
//   );

//   function handleClick() {
//     const nextShapes = shapes.map(shape => {
//       if(shape.type == 'square') return shape;
//       else {
//         return {
//           ...shape,
//           y: shape.y + 50
//         }
//       }
//     })

//     setShapes(nextShapes)
//   }
//   return (
//     <>
//     <button onClick={handleClick}>Move Circles down!</button>
//     {
//       shapes.map(shape => (
//         <div key={shape.id} 
//         style={{
//           background:'purple',
//           position:'absolute',
//           left: shape.x,
//           top: shape.y ,
//           width:'20px',
//           height:'20px',
//           borderRadius: shape.type === 'circle' ? '50%' : ''
//         }}
//         >
//         </div>
//       ))
//     }
//     </>
//   )
// }

// export default App


// import { useState } from 'react';

// let initialCounters = [
//   0, 0, 0
// ];



// function App() {
//   const [count,setCount] = useState(initialCounters);

//   function handleClick(index) {
//     let nextCounter = count.map((counter,i) => {
//       if(i == index) {
//         return counter + 1;
//       }
//       else {
//         return counter;
//       }
//     })

//     setCount(nextCounter)
//   }
//   return (
//     <>
//       <ul>
//         {count.map((counter,i) => (
//           <li key={i}>
//             {counter}<button onClick={() => handleClick(i)}>+</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App




// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// import React from 'react'

// function App() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(
//     initialList
//   );

//   function handleToggleMyList(id, check) {
//     setMyList(myList.map(artwork => {
//       if(artwork.id === id) {
//         return {...artwork,seen: check}
//       }
//       else {
//         return artwork
//       }
//     }))

//   }

//   function handleToggleYourList() {
//     return true;
//   }
//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList artworks={myList} onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList artworks={yourList} onToggle={handleToggleYourList} />
//     </>
//   )
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <>
//       <ul>
//         {artworks.map(artwork => (
//           <li key={artwork.id}><input type="checkbox" checked={artwork.seen} onChange={(e) => { onToggle(artwork.id, e.target.checked) }} />{artwork.title}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import AddTodo from './AddTodo'
// import TaskList from './TaskList'

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];

// function App() {
//   const [todos,setTodos] = useState(initialTodos)

//   function handleAddToDo(title) {
//     setTodos([
//       ...todos,
//       {
//         id: nextId++,
//         title,
//         done: false
//       }
//     ])
//   }

//   function handleToggle(id,check) {

//     setTodos(todos.map(todo => {
//       if (todo.id === id) {
//         return {...todo, done: check}
//       }
//       else {
//         return todo;
//       }
//     }))
//   }

//   function handleDelete(id) {
//    let todo = todos.filter(todo => todo.id !== id);
//    setTodos(todo)
//   }

//   function handleSave(nextTodo) {
//     setTodos(todos.map(t => {
//       if (t.id === nextTodo.id) {
//         return nextTodo;
//       } else {
//         return t;
//       }
//     }));
//   }
//   return (
//       <>
//         <AddTodo onAddTodo={handleAddToDo}/>
//         <TaskList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onSave={handleSave}/>
//       </>
//   )
// }

// export default App



// import React, { useState } from 'react'
// import "./Picture.css";

// function App() {
//   const [active,setActive] = useState(null);
//   console.log("ACTIVE",active)
//   const pictureClass =
//     active === 'background' ? 'picture picture--no-border' : 'picture';
//   const backgroundClass =
//     active === 'picture' ? 'background background--inactive' : 'background';
//   return (
//     <div className={`container ${backgroundClass}`}
//     onClick={() => setActive('background')}
//     >
//       <img
//         className={`${pictureClass}`}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//         onClick={(e) => {e.stopPropagation(); setActive('picture')}}
//       />
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
//   const [answer,setAnswer] = useState('');
//   const [error,setError] = useState(null);
//    const [status, setStatus] = useState('typing');

//   const handleSubmit = async(e) => {
//     try {
//       e.preventDefault();
//       setStatus("submitting");
//       await SubmitForm(answer)

//     } catch (error) {
//       console.log(error);
//       setError(error);
//     }
//   }

//   return (
//     <>
//       <h3>City quiz
//       </h3>
//       <p>In which city is there a billboard that turns air into drinkable water?
//       </p>

//       <form onSubmit={handleSubmit}>
//         <textarea value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
//         <button disabled={status == 'submitting' || answer.length == 0}>Submit</button>
//       </form>
//       { error && <p>{error.message}</p>}
//     </>
//   )
// }


// function SubmitForm(answer) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       let error = answer.toLowerCase() != 'test';
//       if(error) {
//         reject(new Error('Good guess but a wrong answer. Try again!'))
//       }
//       else {
//         resolve();
//       }
//     },3000)
//   })
// }

// export default 


// import React, { useState } from 'react'

// const tasklist = [
//   { id: 0, name:"orange" , checked: true},
//   { id: 1, name: "apple", checked: false}
// ]
// let nextId = 2;
// function TaskList({taskList,onToggle}) {
//   return(
//     <div>
//       <ul>
//         {taskList.map(task => (
//           <li key={task.id}>
//             <input type="checkbox" onChange={(e) => onToggle(task.id,e.target.checked)} checked={task.checked}></input>{ task.checked ? (<del> {task.name}</del>) : task.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function App() {
//   const [taskList,setTaskList] =useState(tasklist);
//   const [inputValue,setInputValue] = useState("");

//   const handleChange = async() => {
//     setTaskList([
//       ...taskList,
//       {id : nextId++ , name : inputValue , checked : false}
//     ])
//   }

//   const onToggle = (id, check) => {
//       const data = taskList.map(tasks => {
//         if(tasks.id === id) {
//           return {
//             ...tasks,
//             checked: check
//           }
//         }
//         else {
//           return tasks
//         }
//       })
//       setTaskList(data)
//       console.log("data",data);
//   }
//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
//       <button onClick={handleChange}>add</button>
//       <TaskList taskList={taskList} onToggle={onToggle}></TaskList>
//     </div>
//   )
// }

// export default App


// async function delay(time) {
//   return new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         if(!time) reject(new Error("no time"))
//         resolve()
//     },time)
//   })
// }


// import React, { useState } from 'react'
// import './Picture.css'

// function Panel({title,children,isActive, onShow}){
//   console.log(isActive)
//   return (
//     <div className='box'>
//         <h3>{title}</h3>
//         {isActive ? (<p>
//           {children}
//         </p>) :
//           <button onClick={onShow}>Show</button>
//         }

//     </div>
//   )
// }

// function App() {
//   const [activeIndex,setActiveIndex] = useState(null);

//   const panels = [
//     {
//       title: "About",
//       content:
//         "With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.",
//     },
//     {
//       title: "Etymology",
//       content:
//         "The name comes from алма, the Kazakh word for 'apple' and is often translated as 'full of apples'. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple.",
//     },
//     {
//       title: "History",
//       content:
//         "Almaty has a rich history, being part of the Silk Road trade routes and later developing into an important cultural and economic center.",
//     },
//   ];
//   return (
//       <section className='container'>
//         <h2>Almaty, Kazakhstan</h2>
//         {
//           panels.map((panel,index) => (
//             <Panel title={panel.title} key={index} isActive={activeIndex === index} onShow={() => setActiveIndex(index)}>{panel.content}</Panel>
//           ))
//         }
//       </section>
//   )
// }

// export default App


// import React, { useState } from 'react'

// function App() {
//   const [value,setValue] = useState('')
//   const handleChange = (e) => {
//     setValue(e.target.value)
//   }
//   return (
//     <>
//       <Input label="First Input" onChange={handleChange} value={value}></Input>
//       <Input label="Second Input" onChange={handleChange} value={value}></Input>
//     </>
//   )
// }

// function Input({label, onChange, value}){

//   return (
//     <label>
//       {label}
//       <input type="text" onChange={onChange} value={value}/>
//     </label>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import { foods,filterItems } from './data'

// function App() {
//   const [query, setQuery] = useState('');
//   const results = filterItems(foods,query)
//   const handleChange = (e) => {
//     setQuery(e.target.value);
//   }
//   return (
//     <>
//       <Search query={query} onChange={handleChange}></Search>
//       <hr></hr>
//       <ListItems foods={results}></ListItems>
//     </>
//   )
// }

// function Search({query,onChange}) {
//   return (
//     <>
//       <label>
//       Search
//     </label>
//     <input type="text" value={query} onChange={onChange}/>
//     </>

//   )
// }

// function ListItems({foods}){
//   return(
//     <div>
//       <ul>
//         {
//           foods.map(food => (
//               <li key={food.id}>
//                 <h4>{food.name}</h4>
//                 <p>{food.description}</p>
//               </li>
//           ))
//         }
//         </ul>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';
// import { initialTravelPlan } from './data';

// function App() {
//   const [plan,setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId,childId) {
//     const parent = plan[parentId];

//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds.filter(id => id !== childId)
//     }

//     console.log("nextParent",nextParent);

//     setPlan({
//       ...plan,
//       [parentId] : nextParent
//     })
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;

//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//           { planetIds.map(id => (
//             <PlaceTree key={id} id={id} placesById={plan} parentId={0} onComplete={handleComplete}></PlaceTree>
//           ))}
//       </ol>
//     </>
//   )
// }

// function PlaceTree({id, placesById, parentId, onComplete}) {
//   const planetId = placesById[id];
//   const childIds = planetId.childIds;
//   return (
//     <>
//       <li key={id}>
//         { planetId.title} <button onClick={() => onComplete(parentId,id)}>On Complete</button>
//         { childIds.length > 0 && (
//           <ol>
//             { childIds.map(childId => (
//               <PlaceTree key={childId} id={childId} placesById={placesById} parentId={id} onComplete={onComplete}></PlaceTree>
//             ))}
//           </ol>
//         )}
//       </li>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';
// import { letters } from './data';
// import './Picture.css'

// function App() {
//   const [selectedId, setSelectedId] = useState(new Set())

//   function handleToggle(toggleId) {
//     const nextIds = new Set(selectedId);
//     // if(selectedId.includes(toggleId)) {
//     //   setSelectedId(selectedId.filter(id => id!== toggleId))
//     // }
//     // else {
//     //   setSelectedId([...selectedId, toggleId]);
//     // }
//     if(nextIds.has(toggleId)) {
//       nextIds.delete(toggleId)
//     }
//     else {
//       nextIds.add(toggleId)
//     }
//     setSelectedId(nextIds)
//   }
//   return (
//       <>
//         <div className='container'>
//           <h2>Inbox</h2>
//           <ul>
//              { letters.map(letter => (
//               <Letters key={letter.id} letter={letter} isSelected={ selectedId.has(letter.id)} onToggle={handleToggle}></Letters>
//           ))}
//           </ul>

//         </div>
//       </>
//   )
// }

// function Letters({letter, isSelected, onToggle}) {
//   return (
//     <>
//         <li className={ isSelected? 'selected' : ''}>
//           <label>
//             <input type="checkbox" checked={isSelected} onChange={() => onToggle(letter.id)}/>
//           {letter.subject}
//           </label></li>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import './Picture.css'

// function App() {
//   const [playerA,setPlayerA] =useState(true);
//   return (
//     <>
//       <div className='container'>
//         { playerA ? <Counter person="Sarah" key="Sarah"/> : <Counter person="Taylor" key="Taylor"/>}
//         <button onClick={() => setPlayerA(!playerA)}>Next Player!</button>
//       </div>
//     </>
//   )
// }

// function Counter({person}) {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <div className='box'>
//         <label htmlFor="">{person}'s score:</label>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Add One</button>
//       </div>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import './Picture.css'

// function AddTask({onAddTask}) {
//   const [data,setData] = useState('');
//   return (
//     <div>
//       <input type="text" placeholder='Add task' value={data} onChange={(e)=> setData(e.target.value)}/>
//       <button onClick={(e) => onAddTask(data)}>Add</button>
//     </div>
//   )
// }


// function TaskList({ tasks, onToggle, onSaveTask }) {
//   const [edit, setEdit] = useState(false);

//   return (
//     <>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>{edit ?
//             <div>
//               <input type="text" value={task.text} onChange={(e) => onSaveTask(task.id,e.target.value)}/>
//               <button onClick={() => setEdit(false)}>Save</button>
//             </div> : <>
//               <input type="checkbox" checked={task.done} onChange={(e) => onToggle(task.id,e.target.checked)}/>{task.done ? <del>{task.text}</del>:task.text} <button onClick={() => setEdit(true)}>Edit</button><button>Delete</button>
//             </>}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// function App() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(title) {
//     setTasks([
//       ...tasks,
//       { id: nextId++ , text: title, done: false}
//     ])
//   }

//   function onToggle(id,check){
//     let data = tasks.map(task=>{
//       if(task.id === id) {
//         return {...task, done: check}
//       }
//       else return task
//     });
//     setTasks(data);
//   }

//   function handleSaveTask(id,title){
//     setTasks(tasks.map(task=> {
//       if(task.id === id) {
//         return {...task, text: title}
//       }
//       else return task
//     }))
//   }
//   return (
//     <div className='container'>
//       <h3>Prague itinerary</h3>
//       <AddTask onAddTask={handleAddTask}/>
//       <TaskList tasks={tasks} onToggle={onToggle} onSaveTask={handleSaveTask}></TaskList>
//     </div>
//   )
// }


// const initialTasks = [
//   { id: 0, text: 'Visit Kafka Museum', done: true },
//   { id: 1, text: 'Watch a puppet show', done: false },
//   { id: 2, text: 'Lennon Wall pic', done: false },
// ]
// let nextId = 3;
// export default App


import React, { useContext, useReducer, useState } from 'react'
import './Picture.css'
import TasksProvider, { useTasks, useTasksDispatch } from './TasksContext';

function AddTask({ onAddTask }) {
  const [data, setData] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <div>
      <input type="text" placeholder='Add task' value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={() => dispatch({ type: "added", text: data, id: nextId++ })}>Add</button>
    </div>
  )
}


function TaskList({ onToggle, onSaveTask }) {
  const [edit, setEdit] = useState(false);
  const [editingId, setEditingId] = useState('');
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  return (
    <>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{edit && editingId === task.id ?
            <div>
              <input type="text" value={task.text} onChange={(e) => dispatch({ type: "saved", text: e.target.value, id: task.id })} />
              <button onClick={() => setEdit(false)}>Save</button>
            </div> : <>
              <input type="checkbox" checked={task.done} onChange={(e) => dispatch({ type: "toggled", id: task.id, check: e.target.checked })} />{task.done ? <del>{task.text}</del> : task.text} <button onClick={() => { setEdit(true); setEditingId(task.id) }}>Edit</button><button onClick={() => dispatch({ type: "deleted", id: task.id })}>Delete</button>
            </>}
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {

  return (
    <div className='container'>
      <TasksProvider>
        <h3>Prague itinerary</h3>
        <AddTask />
        <TaskList></TaskList>
      </TasksProvider>
    </div>
  )
}


export default App


// import React, { useContext } from 'react'
// import './Picture.css'
// import { LevelContext } from './LevelContext'

// function App() {
//   return (
//     <Section level={1}>
//       <Heading >Heading</Heading>
//       <Heading >Heading</Heading>
//       <Section level={2}>
//         <Heading >Heading</Heading>
//         <Heading >Heading</Heading>
//       </Section>
//       <Section level={3}>
//         <Heading >Heading</Heading>
//         <Heading >Heading</Heading>
//       </Section>
//     </Section>
//   )
// }

// function Heading({ children }) {
//   const level = useContext(LevelContext)
//   switch (level) {
//     case 1:
//       return (<h1>{children}</h1>)
//     case 2:
//       return <h2>{children}</h2>
//     case 3:
//       return <h2>{children}</h2>
//     default:
//       throw Error('UnKnown Level ' + level)
//   }
// }

// function Section({ children, level }) {

//   return (
//     <section className='section'>
//       <LevelContext value={level}>
//       {children}
//       </LevelContext>
//     </section>
//   )
// }

// export default App



