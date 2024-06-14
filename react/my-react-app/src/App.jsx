import Header from './Header.jsx'
import Button from './Button.jsx'
import ListItems from './ListItems.jsx'
import List from './List.jsx'
import MyReactVersion from './MyReactionVersion.jsx'
import UserGreeting from './UserGreeting.jsx'
import Student from './Student.jsx'
import ButtonEvent from './ButtonEvent.jsx'
import Card from './Card.jsx'
import Food from './Food.jsx'
import Footer from './Footer.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import ColorPicker from './ColorPicker.jsx'

function App() {

    const items = [
        {id: 1, name:"Box", weight: 10},
        {id: 2, name:"Car", weight: 2000},
        {id: 3, name:"Brick", weight: 2},
        {id: 4, name:"Hang", weight: 3},
        {id: 5, name:"Gun", weight: 1},
    ]

    const vegetables = [
        {id: 6, name: "potatoes", weight: 110},
        {id: 7, name: "celery", weight: 15},
        {id: 8, name: "carrots", weight: 25}, 
        {id: 9, name: "corn", weight: 63},
        {id: 10, name: "broccoli", weight: 50},
    ]

    return(
        <>
            <Header/>

            <ColorPicker />
            <Counter />
            <MyComponent />
            <ButtonEvent />
            <ProfilePicture />
            {items.length > 0 && <ListItems items={items} category="Items" />}
            {vegetables.length > 0 && <ListItems items={vegetables} category="vegetables" />}
            
            <MyReactVersion />
            <List />
            <UserGreeting isLoggedIn={true} username="BroCode" />
            <Student name="Spongebob" age={30} isStudent={true} />
            <Student name="Patrick" age={42} isStudent={false} />
            <Student name="Squidward" age={50} isStudent={false} />
            <Student name="Sandy" age={27} isStudent={true} />
            <Student />
            <Button/>
            <Card/>
            <Food/>
            <Footer/>
        </>
    )
}
 
export default App
