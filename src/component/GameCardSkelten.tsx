import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";



// Thats cmponent is responsable for  make skelten when is loading to fetch the data  


export default function GameCardSkelten() {
  return (
    <Card>
        <Skeleton height="200px"/>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
