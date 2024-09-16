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
        hobbies: ['reading', 'coding', 'hiking', 'photography'],
        country: 'USA',
        languages: ['English', 'Spanish', 'JavaScript'],
        education: {
            degree: 'Computer Science',
            university: 'Tech University'
        },
        socialMedia: {
            twitter: '@johndoe',
            linkedin: 'john-doe-dev'
        }
    };

    const mergedObj = { ...parentObj, ...childObj };

    console.log(mergedObj);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
            <h1 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>{mergedObj.name}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <p><strong>Age:</strong> {mergedObj.age}</p>
                <p><strong>City:</strong> {mergedObj.city}</p>
                <p><strong>Occupation:</strong> {mergedObj.occupation}</p>
                <p><strong>Country:</strong> {mergedObj.country}</p>
            </div>
            <h2 style={{ color: '#555', marginTop: '20px' }}>Hobbies</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {mergedObj.hobbies.map((hobby, index) => (
                    <li key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px 10px', backgroundColor: '#ddd', borderRadius: '15px' }}>{hobby}</li>
                ))}
            </ul>
            <h2 style={{ color: '#555', marginTop: '20px' }}>Languages</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {mergedObj.languages.map((language, index) => (
                    <li key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px 10px', backgroundColor: '#ddd', borderRadius: '15px' }}>{language}</li>
                ))}
            </ul>
            <h2 style={{ color: '#555', marginTop: '20px' }}>Education</h2>
            <p><strong>Degree:</strong> {mergedObj.education.degree}</p>
            <p><strong>University:</strong> {mergedObj.education.university}</p>
            <h2 style={{ color: '#555', marginTop: '20px' }}>Social Media</h2>
            <p><strong>Twitter:</strong> {mergedObj.socialMedia.twitter}</p>
            <p><strong>LinkedIn:</strong> {mergedObj.socialMedia.linkedin}</p>
        </div>
    );
}

export default Header;