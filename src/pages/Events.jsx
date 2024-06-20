import { BreadcrumbItem, Breadcrumbs, Spinner } from "@nextui-org/react"
import NavbarComps from "../components/NavbarComps"
import { useEffect, useState } from "react"
import { instance } from "../api/Api"
import EventsCardComps from "../components/EventsCardComps"
import { parseISO, format } from "date-fns"

const Events = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await instance.get("/events")
            setData(response.data.data)
        } catch (error) {
            console.error("Error while fetching data: ", error)
        } finally {
            setLoading(false)
        }
    }

    const formatTime = (time) => {
        const parsedDate = parseISO(time)
        return format(parsedDate, 'yyyy/MM/dd HH:mm')
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
                                                <EventsCardComps key={index} displayName={item.displayName} shortDisplayName={item.shortDisplayName} startTime={formatTime(item.startTime)} endTime={formatTime(item.endTime)} />
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

export default Events
