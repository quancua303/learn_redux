import { useDispatch, useSelector } from "react-redux";
import HobbyList from "./HobbyList";
import { addNewHobby, setActiveHobby } from './../actions/todohobby';


function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);


    const dispath = useDispatch();

    const randomNumber = () => {
        return 1000 + Math.trunc((Math.random() * 9000));
    }



    const handleAddHobbyClick = () => {
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }
        dispath(addNewHobby(newHobby));
    }

    const handleHobbyClick = (hobby) => {
        dispath(setActiveHobby(hobby));
    }

    console.log(activeId)
    return (
        <>
            <div className="">
                <HobbyList data={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
                <button onClick={handleAddHobbyClick}>Add new Hobby</button>
            </div>
        </>
    )
}

export default HomePage;