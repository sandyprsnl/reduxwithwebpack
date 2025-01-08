const path = require("path");

module.exports={
    mode:"development",
    // entry:"./src/2_redux_with_redux_toolkit/index.js",
    // entry:"./src/3_redux_with_redux_toolkit_with_thunk/index.js",
    // entry:"./src/4_redux_with_redux_toolkit_with_Slice/index.js",
    // entry:"./src/5_redux_with_redux_toolkit_with_Slice_and_middleware/index.js"
    // entry:"./src/6_fetchAPIData_with_normal_method/index.js",
    // entry:"./src/7_fetchAPIData_with_thunk/index.js",
    entry:"./src/8_fetchAPIData_with_middleware/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    watch:true
}