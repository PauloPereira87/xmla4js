interface executeTabularSuccessCallback {
}

interface executeTabularErrorCallback {
}

interface XmlaProperties {
    DataSourceInfo?: string
    Catalog?: string
    Format?: string
}

interface executeOptions {
    url: string
    statement?: string
    properties?: XmlaProperties
    async?: boolean
}


interface requestOptions extends executeOptions {
    method?: 'METHOD_DISCOVER' | 'METHOD_EXECUTE'
    restrictions?: Object
    username?: string
    password?: string

    requestTimeout?: number

    success?(xmlaInstance: XmlaInstance, options: string, response: XmlaRowset): void
    error?(xmlaInstance: XmlaInstance, options: any, exception: any): void
    callback?(event: string, xmlaInstance: XmlaInstance, options: any, exception?: any, response?: XmlaRowset | XmlaDataset): void
}

export class XmlaRowset {
    constructor(node: Document, requestType: string, xmla: Xmla)
    fetchAllAsArray(rows?: Array<any>): Array<any>
    fetchAllAsObject(rows?: Array<any>): Array<any>
}

interface XmlaDataset {
    execute(): XmlaDataset | XmlaRowset
    fetchAsObject(cellsetAsObject: boolean): Object
}

interface XmlaInstance {
    defaultOptions: XmlaOptions
}


interface XmlaOptions {
    requestTimeout?: number
    async?: boolean
    forceResponseXMLEmulation?: boolean
    addFieldGetters?: boolean
}

export class Xmla implements XmlaInstance {
    responseXML: Document
    constructor(options?: XmlaOptions)
    defaultOptions: XmlaOptions
    executeTabular(options: requestOptions): XmlaRowset
    execute(options: executeOptions): XmlaDataset | XmlaRowset
    request(options: requestOptions): XmlaDataset | XmlaRowset
    executeTabular(options: requestOptions): XmlaRowset
    fetchAllAsObject(rows?: Array<object>): [[object]]
    getResponseXML(): Document
}