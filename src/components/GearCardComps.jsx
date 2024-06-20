import { Avatar, Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react"

// eslint-disable-next-line react/prop-types
const GearCardComps = ({ displayName, description, displayIcon, cost, category }) => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="justify-between">
                <div className="flex gap-2">
                    <Avatar src={ displayIcon } color="primary" radius="sm" />
                    <div className="flex flex-col items-start justify-center">
                        <p className="text-md">{ displayName }</p>
                        <p className="text-small text-default-500">{ category }</p>
                    </div>
                </div>
                <Button variant="bordered" color="success" radius="full">{ cost }</Button>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{ description }</p>
            </CardBody>
        </Card>
    )
}

export default GearCardComps
