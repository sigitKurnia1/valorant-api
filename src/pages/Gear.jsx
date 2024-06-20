import { useEffect, useState } from "react"
import NavbarComps from "../components/NavbarComps"
import { Breadcrumbs, BreadcrumbItem, Spinner } from "@nextui-org/react"
import { instance } from "../api/Api"
import GearCardComps from "../components/GearCardComps"

const Gear = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await instance.get("/gear")
            setData(response.data.data)
        } catch (error) {
            console.error("Error while fetching data: ", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <NavbarComps />
            <div className="flex flex-col min-h-screen">
                <div className="grid mx-6 md:mx-[124px] my-5">
                    <Breadcrumbs>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Gear</BreadcrumbItem>
                    </Breadcrumbs>
                    <div className="grid md:grid-cols-3 gap-5 mt-5">
                        {
                            loading ? (
                                <div className="mt-5 col-span-3 flex justify-center items-center">
                                    <Spinner label="Loading..." />
                                </div>
                            ) : (
                                data.length > 0 ? (
                                    data.map((item, index) => (
                                        <>
                                            <div className="flex justify-center md:grid">
                                                <GearCardComps key={index} displayName={item.displayName} description={item.description} displayIcon={item.shopData.newImage} cost={item.shopData.cost} category={item.shopData.category} />
                                            </div>
                                        </>
                                    ))
                                ) : (
                                    <div className="mt-5 col-span-3 flex justify-center items-center">
                                        <p>No Data Available</p>
                                    </div>  
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gear
