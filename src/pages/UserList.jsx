import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import Loading from '../components/Loading'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [is_error, setError] = useState(false)
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (res.status == 200) {
                    setUsers(res?.data)
                    console.log(res.data);

                }
            })
            .catch((error) => {
                setError(true)
            })
            .finally(() => {
                console.log("API dan response qatydi");
                setLoading(false)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) {
        return <Loading />
    }
    if (is_error) {
        return <h1>Nimadir Xato</h1>
    }
    return (
        <div className='bg-gray-100 min-h-screen p-6 flex flex-col items-center mt-26'>
            <Fragment>
                {
                    <h1 className='text-center py-4 text-[24px] font-bold text-blue-500'>Xodimlar ro'yxati</h1>
                }
                {
                    <table className='w-full cursor-pointer'>
                        <thead>
                            <tr className='text-[20px] font-bold'>
                                <th className='border py-2 px-1'>ID</th>
                                <th className='border py-2 px-1'>NAME</th>
                                <th className='border py-2 px-1'>EMAIL</th>
                                <th className='border py-2 px-1'>PHONE</th>
                                <th className='border py-2 px-1'>ADDRESS(CITY-SUITE)</th>
                                <th className='border py-2 px-1'>COMPANY NAME</th>
                            </tr>
                        </thead>
                        {
                            users?.map((item) => {
                                if (item.id % 2 == 0) {
                                    return (
                                        <tbody key={item.id}>
                                            <tr className='text-center text-[18px] font-semibold hover:text-blue-500'>
                                                <td className='border border-black py-2 px-1 text-blue-950'>{item.id}</td>
                                                <td className='border border-black py-2 px-1'>{item.name}</td>
                                                <td className='border border-black py-2 px-1 hover:underline hover:decoration-violet-700'>{item.email}</td>
                                                <td className='border border-black py-2 px-1'>{item.phone}</td>
                                                <td className='border border-black py-2 px-1'>{item.address.city + "-" + item.address.suite}</td>
                                                <td className='border border-black py-2 px-1'>{item.company.name}</td>
                                            </tr>
                                        </tbody>
                                    )
                                }
                                else {
                                    return (
                                        <tbody key={item.id}>
                                            <tr className='text-center text-[18px] font-semibold bg-gray-200 hover:text-blue-500'>
                                                <td className='border border-black py-2 px-1 text-blue-950'>{item.id}</td>
                                                <td className='border border-black py-2 px-1'>{item.name}</td>
                                                <td className='border border-black py-2 px-1 hover:underline hover:decoration-violet-700'>{item.email}</td>
                                                <td className='border border-black py-2 px-1'>{item.phone}</td>
                                                <td className='border border-black py-2 px-1'>{item.address.city + "-" + item.address.suite}</td>
                                                <td className='border border-black py-2 px-1'>{item.company.name}</td>
                                            </tr>
                                        </tbody>
                                    )
                                }

                            })
                        }
                    </table>
                }
            </Fragment>
        </div>
    )
}

export default UserList