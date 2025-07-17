
declare function print(...args: any[]): void

/** @noSelf **/
declare namespace console {
    function log(...args: any[]): void
    function warn(...args: any[]): void
    function error(...args: any[]): void
    function info(...args: any[]): void
    function debug(...args: any[]): void
}

/** @noSelf **/
declare namespace os {
    function time(): number
}

/** @noSelf **/
declare namespace coroutine {
    type Coroutine = any
    function yield(result?: any): any
    function running(): Coroutine
    function resume(co: Coroutine, result?: any): any
}

/** @noSelf **/
declare function encodeURIComponent(s: string): string

/** @noSelf **/
declare namespace env {
    var TARGET: string
    var MOD_ID: string
    var MOD_VERSION: string
}
