(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[171],{568:function(e,n,i){"use strict";e.exports=function(e){var n={$pattern:/[\w#]+/,keyword:"#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set some static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c compactMap contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"},i=e.COMMENT("/\\*","\\*/",{contains:["self"]}),t={className:"subst",begin:/\\\(/,end:"\\)",keywords:n,contains:[]},a={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/"""/,end:/"""/},{begin:/"/,end:/"/}]},r={className:"number",relevance:0,variants:[{begin:"\\b(".concat("([0-9]_*)+",")(\\.(").concat("([0-9]_*)+","))?")+"([eE][+-]?(".concat("([0-9]_*)+","))?\\b")},{begin:"\\b0x(".concat("([0-9a-fA-F]_*)+",")(\\.(").concat("([0-9a-fA-F]_*)+","))?")+"([pP][+-]?(".concat("([0-9]_*)+","))?\\b")},{begin:/\b0o([0-7]_*)+\b/},{begin:/\b0b([01]_*)+\b/}]};return t.contains=[r],{name:"Swift",keywords:n,contains:[a,e.C_LINE_COMMENT_MODE,i,{className:"type",begin:"\\b[A-Z][\\wÀ-ʸ']*[!?]"},{className:"type",begin:"\\b[A-Z][\\wÀ-ʸ']*",relevance:0},r,{className:"function",beginKeywords:"func",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:n,contains:["self",r,a,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],illegal:/\[|%/},{className:"class",beginKeywords:"struct protocol class extension enum",keywords:n,end:"\\{",excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]},{className:"meta",begin:"(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|@propertyWrapper|@main)\\b"},{beginKeywords:"import",end:/$/,contains:[e.C_LINE_COMMENT_MODE,i],relevance:0}]}}}}]);
//# sourceMappingURL=swift.js.map?v=80032de9afc10a6d34c2