import './../css/HobbyList.css';

const HobbyList = (data, activeId, onHobbyClick) => {

    console.log('active' ,activeId)
    console.log(onHobbyClick)


    const handleClick = (hobby) => {
        if (onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return (
        <ul className="ulList">
            {data.data.map(data => {
                return (
                    <li className={data.id === activeId ? "active" : ""} key={data.id} onClick={() => handleClick(data)}>{data.title}</li>
                )
            })}
        </ul>
    )
}

export default HobbyList;
