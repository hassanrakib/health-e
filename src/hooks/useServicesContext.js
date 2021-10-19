import { useContext } from "react"
import { servicesContext } from "../contexts/ServicesProvider"

const useServicesContext = () => {
    return useContext(servicesContext);
}

export default useServicesContext;