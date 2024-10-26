import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editBookId, setEditBookId] = useState(null);
  const [showDeletedData, setShowDeletedData] = useState(false);
  const [deletedBooks, setDeletedBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books'));
    if (savedBooks) {
      setBooks(savedBooks);
    }
    const savedDeletedBooks = JSON.parse(localStorage.getItem('deletedBooks'));
    if (savedDeletedBooks) {
      setDeletedBooks(savedDeletedBooks);
    }
  }, []);

  const handleAddBook = () => {
    const newBook = {
      id: Math.floor(Math.random() * 1000) + 1,
      title,
      description
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setTitle('');
    setDescription('');
  };

  const handleEditBook = () => {
    const updatedBooks = books.map(b =>
      b.id === editBookId ? { ...b, title, description } : b
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setTitle('');
    setDescription('');
    setEditMode(false);
    setEditBookId(null);
  };

  const handleDeleteBooks = () => {
    const updatedBooks = books.filter(book => !selectedBooks.includes(book.id));
    const deletedBooksList = books.filter(book => selectedBooks.includes(book.id));
    setBooks(updatedBooks);
    const updatedDeletedBooks = [...deletedBooks, ...deletedBooksList];
    setDeletedBooks(updatedDeletedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    localStorage.setItem('deletedBooks', JSON.stringify(updatedDeletedBooks));
    setSelectedBooks([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      handleEditBook();
    } else {
      handleAddBook();
    }
  };

  const handleSelectBook = (id) => {
    if (editMode) {
      alert("Can't make both changes at once");
      return;
    }
    setSelectedBooks(prevSelectedBooks =>
      prevSelectedBooks.includes(id)
        ? prevSelectedBooks.filter(bookId => bookId !== id)
        : [...prevSelectedBooks, id]
    );
  };

  const handleEditClick = (book) => {
    if (selectedBooks.length > 0) {
      alert("Can't make both changes at once");
      setSelectedBooks([]);
      return;
    }
    setEditMode(true);
    setEditBookId(book.id);
    setTitle(book.title);
    setDescription(book.description);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditBookId(null);
    setTitle('');
    setDescription('');
  };

  const isFormValid = title && description;

  const handleShowDeletedData = () => {
    setShowDeletedData(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDeletedData = () => {
    setShowDeletedData(false);
    document.body.style.overflow = 'auto';
  };

  const handleRestoreBook = (book) => {
    const updatedDeletedBooks = deletedBooks.filter(b => b.id !== book.id);
    const updatedBooks = [...books, book];
    setDeletedBooks(updatedDeletedBooks);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    localStorage.setItem('deletedBooks', JSON.stringify(updatedDeletedBooks));
  };

  const handleClearHistory = () => {
    setDeletedBooks([]);
    localStorage.removeItem('deletedBooks');
  };

  return (
    <>
      <div style={{ textAlign: 'right', padding: '1rem' }}>
        <button onClick={handleDeleteBooks} disabled={selectedBooks.length === 0}>Delete Selected</button>
        <button onClick={handleShowDeletedData}>Previous Data/Deleted Data</button>
      </div>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center', padding: '1rem' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={!isFormValid}>{editMode ? 'Update' : 'Submit'}</button>
        {editMode && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
      </form>
      <table align="center" border={1} style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Select</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedBooks.includes(book.id)}
                  onChange={() => handleSelectBook(book.id)}
                />
              </td>
              <td>
                <button onClick={() => handleEditClick(book)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDeletedData && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <button onClick={handleCloseDeletedData} style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem'
            }}>Close</button>
            <button onClick={handleClearHistory} style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem'
            }}>Clear History</button>
            <table align="center" border={1} style={{ border: '1px solid black', marginTop: '4rem' }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Restore</th>
                </tr>
              </thead>
              <tbody>
                {deletedBooks.map((book, index) => (
                  <tr key={index}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>
                      <button onClick={() => handleRestoreBook(book)}>Restore</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )
}

export default App
