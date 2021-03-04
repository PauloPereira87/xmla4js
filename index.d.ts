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
    constructor(node: DOMDocument, requestType: string, xmla: Xmla)

    static readonly MD_DIMTYPE_UNKNOWN: bigint
    static readonly MD_DIMTYPE_TIME: bigint
    static readonly MD_DIMTYPE_MEASURE: bigint
    static readonly MD_DIMTYPE_OTHER: bigint
    static readonly MD_DIMTYPE_QUANTITATIVE: bigint
    static readonly MD_DIMTYPE_ACCOUNTS: bigint
    static readonly MD_DIMTYPE_CUSTOMERS: bigint
    static readonly MD_DIMTYPE_PRODUCTS: bigint
    static readonly MD_DIMTYPE_SCENARIO: bigint
    static readonly MD_DIMTYPE_UTILIY: bigint
    static readonly MD_DIMTYPE_CURRENCY: bigint
    static readonly MD_DIMTYPE_RATES: bigint
    static readonly MD_DIMTYPE_CHANNEL: bigint
    static readonly MD_DIMTYPE_PROMOTION: bigint
    static readonly MD_DIMTYPE_ORGANIZATION: bigint
    static readonly MD_DIMTYPE_BILL_OF_MATERIALS: bigint
    static readonly MD_DIMTYPE_GEOGRAPHY: bigint
    static readonly MD_STRUCTURE_FULLYBALANCED: bigint
    static readonly MD_STRUCTURE_RAGGEDBALANCED: bigint
    static readonly MD_STRUCTURE_UNBALANCED: bigint
    static readonly MD_STRUCTURE_NETWORK: bigint
    static readonly MD_USER_DEFINED: bigint
    static readonly MD_SYSTEM_ENABLED: bigint
    static readonly MD_SYSTEM_INTERNAL: bigint
    static readonly MDMEMBER_TYPE_REGULAR: bigint
    static readonly MDMEMBER_TYPE_ALL: bigint
    static readonly MDMEMBER_TYPE_FORMULA: bigint
    static readonly MDMEMBER_TYPE_MEASURE: bigint
    static readonly MDMEMBER_TYPE_UNKNOWN: bigint
    static readonly MDMEASURE_AGGR_SUM: bigint
    static readonly MDMEASURE_AGGR_COUNT: bigint
    static readonly MDMEASURE_AGGR_MIN: bigint
    static readonly MDMEASURE_AGGR_MAX: bigint
    static readonly MDMEASURE_AGGR_AVG: bigint
    static readonly MDMEASURE_AGGR_VAR: bigint
    static readonly MDMEASURE_AGGR_STD: bigint
    static readonly MDMEASURE_AGGR_DST: bigint
    static readonly MDMEASURE_AGGR_NONE: bigint
    static readonly MDMEASURE_AGGR_AVGCHILDREN: bigint
    static readonly MDMEASURE_AGGR_FIRSTCHILD: bigint
    static readonly MDMEASURE_AGGR_LASTCHILD: bigint
    static readonly MDMEASURE_AGGR_FIRSTNONEMPTY: bigint
    static readonly MDMEASURE_AGGR_LASTNONEMPTY: bigint
    static readonly MDMEASURE_AGGR_BYACCOUNT: bigint
    static readonly MDMEASURE_AGGR_CALCULATED: bigint
    static readonly MDMEASURE_AGGR_UNKNOWN: bigint
    static readonly MDPROP_MEMBER: bigint
    static readonly MDPROP_CELL: bigint
    static readonly MDPROP_SYSTEM: bigint
    static readonly MDPROP_BLOB: bigint

    getType(): bigint
    getFields(): [fieldDef]
    getFieldNames(): [string]
    hasMoreRows(): boolean
    nextRow(): void
    next(): void
    eachRow(rowCallback: Function, scope: Object, args: Object): boolean
    currRow(): bigint
    rowCount(): bigint
    reset(): void
    fieldDef(name: string): fieldDef
    fieldIndex(name: string): bigint
    fieldName(index: bigint): string
    fieldVal(nameOrIndex: string | bigint): any[]|boolean|number|bigint|string
    fieldCount(): bigint
    close(): void

    readAsArray(array?: any[]): any[]
    fetchAsArray(array?: any[]): any[]
    readAsObject(object: Object): Object
    fetchAsObject(object: Object): Object
    fetchCustom(func: Function, args: Object): any|boolean

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

    static readonly METHOD_DISCOVER: string
    static readonly METHOD_EXECUTE: string
    static readonly DISCOVER_DATASOURCES: string
    static readonly DISCOVER_PROPERTIES: string
    static readonly DISCOVER_SCHEMA_ROWSETS: string
    static readonly DISCOVER_ENUMERATORS: string
    static readonly DISCOVER_KEYWORDS: string
    static readonly DISCOVER_LITERALS: string
    static readonly DBSCHEMA_CATALOGS: string
    static readonly DBSCHEMA_COLUMNS: string
    static readonly DBSCHEMA_PROVIDER_TYPES: string
    static readonly DBSCHEMA_SCHEMATA: string
    static readonly DBSCHEMA_TABLES: string
    static readonly DBSCHEMA_TABLES_INFO: string
    static readonly MDSCHEMA_ACTIONS: string
    static readonly MDSCHEMA_CUBES: string
    static readonly MDSCHEMA_DIMENSIONS: string
    static readonly MDSCHEMA_FUNCTIONS: string
    static readonly MDSCHEMA_HIERARCHIES: string
    static readonly MDSCHEMA_LEVELS: string
    static readonly MDSCHEMA_MEASURES: string
    static readonly MDSCHEMA_MEMBERS: string
    static readonly MDSCHEMA_PROPERTIES: string
    static readonly MDSCHEMA_SETS: string
    static readonly EVENT_REQUEST: string
    static readonly EVENT_SUCCESS: string
    static readonly EVENT_ERROR: string
    static readonly EVENT_EXECUTE: string
    static readonly EVENT_EXECUTE_SUCCESS: string
    static readonly EVENT_EXECUTE_ERROR: string
    static readonly EVENT_DISCOVER: string
    static readonly EVENT_DISCOVER_SUCCESS: string
    static readonly EVENT_DISCOVER_ERROR: string
    static readonly EVENT_GENERAL: string[]
    static readonly EVENT_DISCOVER_ALL: string[]
    static readonly EVENT_EXECUTE_ALL: string[]
    static readonly EVENT_ALL: string[]
    static readonly PROP_DATASOURCEINFO: string[]
    static readonly PROP_CATALOG: string
    static readonly PROP_CUBE: string
    static readonly PROP_FORMAT: string
    static readonly PROP_FORMAT_TABULAR: string
    static readonly PROP_FORMAT_MULTIDIMENSIONAL: string
    static readonly PROP_AXISFORMAT: string
    static readonly PROP_AXISFORMAT_TUPLE: string
    static readonly PROP_AXISFORMAT_CLUSTER: string
    static readonly PROP_AXISFORMAT_CUSTOM: string
    static readonly PROP_CONTENT: string
    static readonly PROP_CONTENT_DATA: string
    static readonly PROP_CONTENT_NONE: string
    static readonly PROP_CONTENT_SCHEMA: string
    static readonly PROP_CONTENT_SCHEMADATA: string

    constructor(options?: XmlaOptions)
    defaultOptions: XmlaOptions

    protected listeners: Object
    soapMessage: string
    response: XmlaRowset | XmlaDataset
    responseText: string
    responseXML: DOMDocument
    getResponseXML(): DOMDocument
    setOptions(options: Object): void
    addListener(listener: Object | any[]): void
    getXmlaSoapMessage(options: object): string
    request(options: requestOptions): XmlaDataset | XmlaRowset
    execute(options: executeOptions): XmlaDataset | XmlaRowset
    executeTabular(options: requestOptions): XmlaRowset
    executeMultiDimensional(options: requestOptions): XmlaRowset

    discover(options: requestOptions): XmlaRowset
    discoverDataSources(options: requestOptions): XmlaRowset
    discoverProperties(options: requestOptions): XmlaRowset
    discoverSchemaRowsets(options: requestOptions): XmlaRowset
    discoverEnumerators(options: requestOptions): XmlaRowset
    discoverKeywords(options: requestOptions): XmlaRowset
    discoverLiterals(options: requestOptions): XmlaRowset
    discoverDBCatalogs(options: requestOptions): XmlaRowset
    discoverDBColumns(options: requestOptions): XmlaRowset
    discoverDBProviderTypes(options: requestOptions): XmlaRowset
    discoverDBSchemata(options: requestOptions): XmlaRowset
    discoverDBTables(options: requestOptions): XmlaRowset
    discoverDBTablesInfo(options: requestOptions): XmlaRowset
    discoverMDActions(options: requestOptions): XmlaRowset
    discoverMDCubes(options: requestOptions): XmlaRowset
    discoverMDDimensions(options: requestOptions): XmlaRowset
    discoverMDFunctions(options: requestOptions): XmlaRowset
    discoverMDHierarchies(options: requestOptions): XmlaRowset
    discoverMDMeasures(options: requestOptions): XmlaRowset
    discoverMDMembers(options: requestOptions): XmlaRowset
    discoverMDProperties(options: requestOptions): XmlaRowset
    discoverMDSets(options: requestOptions): XmlaRowset

    Rowset: XmlaRowset

    fetchAllAsObject(rows?: Array<object>): [[object]]
    getResponseXML(): DOMDocument
}

interface DOMDocument {
    nodeType: number
    childNodes: any[]
}

interface fieldDef {
    
}