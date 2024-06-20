import { BreadcrumbItem, Breadcrumbs, Spinner } from "@nextui-org/react"
import NavbarComps from "../components/NavbarComps"
import { useEffect, useState } from "react"
import { instance } from "../api/Api"
import WeaponsCardComps from "../components/WeaponsCardComps"

const Weapons = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await instance.get("/weapons")
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
                        <BreadcrumbItem>Weapons</BreadcrumbItem>
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
                                                <WeaponsCardComps key={index} displayName={item.displayName} displayIcon={item.displayIcon} fireRate={ item.weaponStats ? item.weaponStats.fireRate: "No Weapon Stats" } magazineSize={ item.weaponStats ? item.weaponStats.magazineSize : "No Info" } cost={ item.shopData ? item.shopData.cost : "No Info" } category={ item.shopData ? item.shopData.category : "No Info" } />
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

export default Weapons
