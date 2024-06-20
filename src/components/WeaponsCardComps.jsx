import { Avatar, Card, CardBody, CardHeader, Divider, Button } from "@nextui-org/react"

// eslint-disable-next-line react/prop-types
const WeaponsCardComps = ({ displayName, displayIcon, fireRate, magazineSize, cost, category }) => {
    return (
        <Card className="md:w-[310px] w-[400px]">
            <CardHeader className="justify-between">
                <div className="flex gap-2">
                    <Avatar src={ displayIcon } radius="sm" color="secondary" />
                    <div className="flex flex-col items-start justify-center">
                        <p className="text-md">{ displayName }</p>
                        <p className="text-small text-default-500">{ category }</p>
                    </div>
                </div>
                <Button variant="bordered" color="success" radius="full">{ cost }</Button>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Fire Rate: { fireRate }</p>
                <p>Magazine Size: { magazineSize }</p>
            </CardBody>
        </Card>
    )
}

export default WeaponsCardComps
