import React from 'react'

const Home = () =>
{
    
    const [data, setData] = React.useState([]);
      const getGitData = async () => {
        let response = await fetch(`https://api.github.com/users/${'Bhavesh-Khandar'}`);
        let data = await response.json();
        setData(data);
      };
    useEffect(() =>
    {
        getGitData();
    }, [])
    console.log(data)
  return (
      <div>
          home
      </div>
      
  )
}

export default Home