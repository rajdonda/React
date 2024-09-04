function Header() {
    const parentObj = {
        name: 'John',
        age: 35,
        city: 'New York',
        name2: 'Emma',
        age2: 28,
        city2: 'Los Angeles',
        name3: 'Michael',
        age3: 42,
        city3: 'Chicago'
    };

    const childObj = {
        occupation: 'Developer',
        hobbies: ['reading', 'coding'],
        country: 'USA'
    };

    const mergedObj = { ...parentObj, ...childObj };

    console.log(mergedObj);

    return (
        <div>
            <h1>{mergedObj.name}</h1>
            <p>Age: {mergedObj.age}</p>
            <p>City: {mergedObj.city}</p>
            <p>Occupation: {mergedObj.occupation}</p>
            <p>Hobbies: {mergedObj.hobbies.join(', ')}</p>
            <p>Country: {mergedObj.country}</p>
        </div>
    );
}

export default Header;