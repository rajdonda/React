import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {
        this.fetchRecords();
    }

    fetchRecords = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Failed to fetch records');
            }
            const data = await response.json();
            this.setState({ records: data, isLoading: false });
        } catch (error) {
            console.error('Error fetching records:', error);
            this.setState({ error: 'Failed to fetch records. Please try again later.', isLoading: false });
        }
    }

    render() {
        const { records, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return (
                <div>
                    <p>Error: {error}</p>
                    <button onClick={this.fetchRecords}>Retry</button>
                </div>
            );
        }

        return (
            <div>
                <h1>Records</h1>
                {records.length > 0 ? (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map(record => (
                                    <tr key={record.id}>
                                        <td>{record.id}</td>
                                        <td>{record.id}</td>
                                        <td>{record.name}</td>
                                        <td>{record.email}</td>
                                        <td>{record.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No records found.</p>
                )}
            </div>
        );
    }
}

export default Demo;
