import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react"

// eslint-disable-next-line react/prop-types
const CardComps = ({ displayName, developerName, fullPortrait, description }) => {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image alt="agents" width={40} height={40} radius="sm" src={fullPortrait} />
                <div className="flex flex-col">
                    <p className="text-md">{ displayName }</p>
                    <p className="text-small text-default-500">@{ developerName }</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{ description }</p>
            </CardBody>
        </Card>
    )
}

export default CardComps
