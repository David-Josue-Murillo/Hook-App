import React from "react";

export const Small = React.memo(({ value }) => {

     console.log('Dibujando componente');

    return (
        <span>{value}</span>
    )
})
