"use strict";
function logError(error) {
    if ("message" in error)
        console.log(error.message);
    if ("error" in error)
        console.log(error.error);
}
logError({ message: "Download media failed" });
logError({ error: "System error of syntaxis line 122 - 123" });
