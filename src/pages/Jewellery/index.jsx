import { useParams } from "react-router-dom"

const AllJewelleryList = () => {
    const {name} = useParams()
    return(
        <>
        <h1>This {name} jewelry list page.</h1>
        </>
    )
}

export default AllJewelleryList