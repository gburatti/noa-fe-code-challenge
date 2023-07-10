import { toCamoCase } from "../utils/helper"

type Props={
    value: string
    field: string
}

export const IpItem=({field, value}: Props)=>{
    return <div className="ipinfo">
        <span>{toCamoCase(field)}: </span>
        <span className="value">{value}</span>
    </div>
}