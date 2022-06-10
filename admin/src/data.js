export const userColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 180,
        renderCell: (params) => {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginRight: '10px',
                        }}
                    >
                        <img
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain',
                            }}
                            src={params.row.img}
                            alt="avatar"
                        />
                    </div>
                    {params.row.firstName}
                </div>
            )
        },
    },
    { field: 'lastName', headerName: 'Last name', width: 190 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        headerAlign: 'left',
        align: 'left',
        width: 90,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
]

export const userRows = [
    {
        id: 1,
        lastName: 'Snow',
        firstName: 'Jon',
        age: 35,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        age: 42,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        age: 45,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 4,
        lastName: 'Stark',
        firstName: 'Arya',
        age: 16,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        age: 23,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 6,
        lastName: 'Melisandre',
        firstName: 'Raynolds',
        age: 150,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        age: 44,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        age: 36,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 9,
        lastName: 'Roxie',
        firstName: 'Harvey',
        age: 65,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 10,
        lastName: 'Kelvin',
        firstName: 'James',
        age: 65,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 11,
        lastName: 'Kelvin',
        firstName: 'James',
        age: 65,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
    {
        id: 12,
        lastName: 'Kelvin',
        firstName: 'James',
        age: 65,
        email: 'info@gmail.com',
        img: 'https://minimaltoolkit.com/images/randomdata/female/49.jpg',
    },
]


export const userInputs = [
    {
        id: 1,
        title: 'Name and surname',
        placeholder: 'John Doe',
        type: 'text',
    },
    {
        id: 2,
        title: 'Phone',
        placeholder: '+1 234 567 89',
        type: 'text',
    },
    {
        id: 3,
        title: 'Adress',
        placeholder: 'Washington st. 216 San Diego',
        type: 'text',
    },
    {
        id: 4,
        title: 'Username',
        placeholder: 'john_doe',
        type: 'text',
    },
    {
        id: 5,
        title: 'Email',
        placeholder: 'john_doe@gmail.com',
        type: 'email',
    },
    {
        id: 6,
        title: 'Password',
        type: 'password',
    },
    {
        id: 7,
        title: 'Country',
        placeholder: 'USA',
        type: 'text',
    },
]

