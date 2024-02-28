const projectDetails = ({params}:{params:any}) => {
    const {id} = params;
    return ( 
        <div>
            <h1>Project: {id}</h1>
        </div>
     );
}
 
export default projectDetails;