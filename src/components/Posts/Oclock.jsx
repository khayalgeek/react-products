const Oclock = () => {
    return <>
        <h2 style={{margin:'1rem auto',width:'max-content'}}>{new Date().toLocaleTimeString()}</h2>
    </>
}
export default Oclock;