// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { QueryCard } from './QueryCard';
import axios from 'axios';

export const Admin = () => {
    const [query, setQuery] = useState(null);
    const [workurl, setWorkurl] = useState('');
    const [worktitle, setWorkTitle] = useState('');
    const [workdesc, setWorkdesc] = useState('');
    const [flag, setFlag] = useState(false);
    const [err, setErr] = useState(false);

    async function hangleData() {
        axios.get("http://localhost:8000/getData")
            .then((result) => {
                console.log(result.data.msg);
                setQuery(result.data.msg);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        hangleData();
    }, []);


    function handleWorkSubmit(e) {
        e.preventDefault();
        console.log(workurl)
        console.log(worktitle)
        console.log(workdesc)

        const data = {
            "link": workurl,
            "title": worktitle,
            "desc": workdesc,
        }

        axios.post("http://localhost:8000/work", data)
            .then((result) => {
                console.log(result);
                setFlag(true);
            })
            .catch((err) => {
                console.log(err);
                setErr(true);
            })
    }

  return (
    <div className='text-white p-4'>
        <h1 className='text-center text-4xl'>Admin Portal</h1>      
        <div className='my-4'>
              <h1 className='text-2xl'>Current Query</h1>
              <div className='flex gap-2 flex-wrap py-2 cursor-pointer'>
                  { query ?
                      query.map((q, index) => <QueryCard key={index} name={q.name} email={q.email} query={q.inquiry} />)
                    :
                    ""
                  }
              </div>
        </div> 
        <div>
            <h1 className='text-2xl'>New Work Add</h1>
            <p className='my-2 text-xl text-green-800 rounded-lg w-1/2'>
                {flag ? "New Work is Add Sucessfull":""}
                {err ? "Something Went Wrong":""}
            </p>   
            <form onSubmit={handleWorkSubmit} className=' bg-slate-600 rounded-xl p-2 w-1/2'>
                <input
                    type="text"
                    placeholder="Work URL Link"
                    onChange={(e) => setWorkurl(e.target.value)}
                    name="url"
                    className="my-2 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
                />
                <br />
                <input
                    type="text"
                    placeholder="Work Title"
                    onChange={(e) => setWorkTitle(e.target.value)}
                    name="title"
                    className="my-2 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
                />
                <br />
                <input
                    type="text"
                    placeholder="Work Description"
                    onChange={(e) => setWorkdesc(e.target.value)}
                    name="desc"
                    className="my-2 rounded-lg p-1 w-full bg-black border-x-2 border-y-2"
                />
                <br />
                <button
                    type="submit"
                    className="bg-white w-full rounded-lg p-1 my-2 text-black text-2xl font-bold hover:bg-slate-200"
                >
                Submit
                </button>
          </form>  
        </div>  
    </div>
  )
}
