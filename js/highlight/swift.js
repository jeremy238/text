(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[165],{438:function(e,i,n){"use strict";e.exports=function(e){var i={keyword:"#available #colorLiteral #column #else #elseif #endif #file #fileLiteral #function #if #imageLiteral #line #selector #sourceLocation _ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"},n=e.COMMENT("/\\*","\\*/",{contains:["self"]}),t={className:"subst",begin:/\\\(/,end:"\\)",keywords:i,contains:[]},a={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/"""/,end:/"""/},{begin:/"/,end:/"/}]},r={className:"number",begin:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",relevance:0};return t.contains=[r],{keywords:i,contains:[a,e.C_LINE_COMMENT_MODE,n,{className:"type",begin:"\\b[A-Z][\\wÀ-ʸ']*[!?]"},{className:"type",begin:"\\b[A-Z][\\wÀ-ʸ']*",relevance:0},r,{className:"function",beginKeywords:"func",end:"{",excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{begin:/</,end:/>/},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:i,contains:["self",r,a,e.C_BLOCK_COMMENT_MODE,{begin:":"}],illegal:/["']/}],illegal:/\[|%/},{className:"class",beginKeywords:"struct protocol class extension enum",keywords:i,end:"\\{",excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})]},{className:"meta",begin:"(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain|@dynamicMemberLookup|@propertyWrapper)"},{beginKeywords:"import",end:/$/,contains:[e.C_LINE_COMMENT_MODE,n]}]}}}}]);
//# sourceMappingURL=swift.js.map?v=83e19b4a91a44d51b7cf