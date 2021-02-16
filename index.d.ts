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

    static readonly MD_DIMTYPE_UNKNOWN: int
    static readonly MD_DIMTYPE_TIME: int
    static readonly MD_DIMTYPE_MEASURE: int
    static readonly MD_DIMTYPE_OTHER: int
    static readonly MD_DIMTYPE_QUANTITATIVE: int
    static readonly MD_DIMTYPE_ACCOUNTS: int
    static readonly MD_DIMTYPE_CUSTOMERS: int
    static readonly MD_DIMTYPE_PRODUCTS: int
    static readonly MD_DIMTYPE_SCENARIO: int
    static readonly MD_DIMTYPE_UTILIY: int
    static readonly MD_DIMTYPE_CURRENCY: int
    static readonly MD_DIMTYPE_RATES: int
    static readonly MD_DIMTYPE_CHANNEL: int
    static readonly MD_DIMTYPE_PROMOTION: int
    static readonly MD_DIMTYPE_ORGANIZATION: int
    static readonly MD_DIMTYPE_BILL_OF_MATERIALS: int
    static readonly MD_DIMTYPE_GEOGRAPHY: int
    static readonly MD_STRUCTURE_FULLYBALANCED: int
    static readonly MD_STRUCTURE_RAGGEDBALANCED: int
    static readonly MD_STRUCTURE_UNBALANCED: int
    static readonly MD_STRUCTURE_NETWORK: int
    static readonly MD_USER_DEFINED: int
    static readonly MD_SYSTEM_ENABLED: int
    static readonly MD_SYSTEM_INTERNAL: int
    static readonly MDMEMBER_TYPE_REGULAR: int
    static readonly MDMEMBER_TYPE_ALL: int
    static readonly MDMEMBER_TYPE_FORMULA: int
    static readonly MDMEMBER_TYPE_MEASURE: int
    static readonly MDMEMBER_TYPE_UNKNOWN: int
    static readonly MDMEASURE_AGGR_SUM: int
    static readonly MDMEASURE_AGGR_COUNT: int
    static readonly MDMEASURE_AGGR_MIN: int
    static readonly MDMEASURE_AGGR_MAX: int
    static readonly MDMEASURE_AGGR_AVG: int
    static readonly MDMEASURE_AGGR_VAR: int
    static readonly MDMEASURE_AGGR_STD: int
    static readonly MDMEASURE_AGGR_DST: int
    static readonly MDMEASURE_AGGR_NONE: int
    static readonly MDMEASURE_AGGR_AVGCHILDREN: int
    static readonly MDMEASURE_AGGR_FIRSTCHILD: int
    static readonly MDMEASURE_AGGR_LASTCHILD: int
    static readonly MDMEASURE_AGGR_FIRSTNONEMPTY: int
    static readonly MDMEASURE_AGGR_LASTNONEMPTY: int
    static readonly MDMEASURE_AGGR_BYACCOUNT: int
    static readonly MDMEASURE_AGGR_CALCULATED: int
    static readonly MDMEASURE_AGGR_UNKNOWN: int
    static readonly MDPROP_MEMBER: int
    static readonly MDPROP_CELL: int
    static readonly MDPROP_SYSTEM: int
    static readonly MDPROP_BLOB: int

    getType(): int
    getFields(): [fieldDef]
    getFieldNames(): [string]
    hasMoreRows(): boolean
    nextRow(): void
    next(): void
    eachRow(rowCallback: function(): void, scope: Object, args: Object): boolean
    currRow(): int
    rowCount(): int
    reset(): void
    fieldDef(name: string): fieldDef
    fieldIndex(name: string): int
    fieldName(index: int): string
    fieldVal(nameOrIndex: string | int): array|boolean|float|int|string
    fieldCount(): int
    close(): void

    readAsArray(array: array): array
    fetchAsArray(array: array): array
    readAsObject(object: Object): Object
    fetchAsObject(object: Object): Object
    fetchCustom(func: function(), args: Object): mixed|boolean

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
    addListener(listener: Object | Array): void
    getXmlaSoapMessage(options: object): string
    request(options: requestOptions): XmlaDataset | XmlaRowset
    execute(options: executeOptions): XmlaDataset | XmlaRowset
    executeTabular(options: requestOptions): XmlaRowset
    executeMultiDimensional(options: requestOptions): XmlaRowset

    discover(options: Object): XmlaRowset
    discoverDataSources(options: Object): XmlaRowset
    discoverProperties(options: Object): XmlaRowset
    discoverSchemaRowsets(options: Object): XmlaRowset
    discoverEnumerators(options: Object): XmlaRowset
    discoverKeywords(options: Object): XmlaRowset
    discoverLiterals(options: Object): XmlaRowset
    discoverDBCatalogs(options: Object): XmlaRowset
    discoverDBColumns(options: Object): XmlaRowset
    discoverDBProviderTypes(options: Object): XmlaRowset
    discoverDBSchemata(options: Object): XmlaRowset
    discoverDBTables(options: Object): XmlaRowset
    discoverDBTablesInfo(options: Object): XmlaRowset
    discoverMDActions(options: Object): XmlaRowset
    discoverMDCubes(options: Object): XmlaRowset
    discoverMDDimensions(options: Object): XmlaRowset
    discoverMDFunctions(options: Object): XmlaRowset
    discoverMDHierarchies(options: Object): XmlaRowset
    discoverMDMeasures(options: Object): XmlaRowset
    discoverMDMembers(options: Object): XmlaRowset
    discoverMDProperties(options: Object): XmlaRowset
    discoverMDSets(options: Object): XmlaRowset

    Rowset: XmlaRowset

    fetchAllAsObject(rows?: Array<object>): [[object]]
    getResponseXML(): DOMDocument
}

interface DOMDocument {
    nodeType: number
    childNodes: any[]
}