import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react"

// eslint-disable-next-line react/prop-types
const EventsCardComps = ({ displayName, shortDisplayName, startTime, endTime }) => {
    return (
        <Card className="md:w-[310px] w-[400px]">
            <CardHeader className="justify-between">
                <div className="flex gap-2">
                    <Avatar name="VL" radius="sm" isBordered color="danger" />
                    <div className="flex flex-col items-start justify-center ms-2">
                        <p className="text-md">{ displayName }</p>
                        <p className="text-small text-default-500">{ shortDisplayName }</p>
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Events Start Time: { startTime }</p>
                <p>Events End Time: { endTime }</p>
            </CardBody>
        </Card>
    )
}

export default EventsCardComps
